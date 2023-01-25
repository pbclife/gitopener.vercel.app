// import { serialize } from 'next-mdx-remote/serialize';
// import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import {
  getFilesHasExtension,
  getFilesOfDir,
  removeExtension,
} from '@/lib/Utils';
import type {
  FolderStructure,
  GetContentsFromSlug,
  GetDocumentsMenu,
  GetGuidePaths,
} from '@/types/client/FileSystem';
import { promises as fs } from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

const GuideDirPath = path.join(process.cwd(), 'docs', 'guides');

export const getGuidePaths: GetGuidePaths<{ guide: string[] }> = async () => {
  const files = await getFilesOfDir(GuideDirPath);
  const mdxFiles = getFilesHasExtension(files, 'mdx', 'md');
  const justFileNames = mdxFiles.map((file) => removeExtension(file));
  const paramsArr = justFileNames.map((file) => {
    return file.split('/').filter((dir) => dir !== '');
  });
  const paths = paramsArr.map((path) => {
    return {
      params: {
        guide: path,
      },
    };
  });
  return paths;
};

export const getContentsFromSlug: GetContentsFromSlug = async (slug) => {
  const filePath = path.join(GuideDirPath, `${slug}.mdx`);
  const file = await fs.readFile(filePath);

  const { data, content } = matter(file);
  const mdxSouce = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: `wrap` }],
        // [toc, { headings: ['h1', 'h2'] }],
      ],
    },
  });
  return {
    meta: {
      title: data.title,
      author: data?.author ?? null,
      dir: slug.split('/')[0].split('-').join(' '),
      edit: process.env.REPO + `/guides/${slug}.mdx`,
    },
    source: mdxSouce,
  };
};

export const getDocumentsMenu: GetDocumentsMenu = async () => {
  const dirs = await fs.readdir(GuideDirPath, { withFileTypes: true });

  const menu: FolderStructure = {};
  const regX = /\.mdx|\.md$/;

  for (const dir of dirs) {
    if (!dir.isDirectory()) {
      const fileName = dir.name.replace(regX, '');
      menu[fileName] = [];

      menu[fileName].push({
        name: fileName,
        link: `/guides/${fileName}`,
      });
      continue;
    }
    const fileNames = await fs.readdir(path.join(GuideDirPath, dir.name));

    const fileNamesWithoutExt = fileNames.map((fileName) =>
      fileName.replace(regX, '')
    );
    menu[dir.name] = fileNamesWithoutExt.map((fileName) => {
      return {
        name: fileName,
        link: `/guides/${dir.name}/${fileName}`,
      };
    });
  }

  return menu;
};
