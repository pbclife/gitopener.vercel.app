import type {
  FolderStructure,
  GetContentsFromSlug,
  GetDocumentsMenu,
  GetFileContents,
  GetGuidePaths,
  GetProcessedHtml,
  TFileContent,
} from '@/types/client/FileSystem';
import withCodeBlocks from '@/utils/mdx/rehype/withCodeBlocks';
import withSyntaxHighlighting from '@/utils/mdx/rehype/withSyntaxHighlighting';
import { promises as fs } from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeParse from 'rehype-parse';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { getFilesHasExtension, getFilesOfDir, removeExtension } from './Utils';

type TSuppordedFile = 'heading' | 'installation' | 'tech-stack';

const docsDir = path.join(process.cwd(), 'docs');
const guideDirPath = path.join(process.cwd(), 'docs', 'guides');

//  To Get File Contents
export const getFileContents: GetFileContents<TSuppordedFile> = async (
  fileName
) => {
  const file = await fs.readFile(
    path.join(docsDir, 'home', `${fileName}.mdx`),
    'utf8'
  );
  const grayFile = matter(file);
  const content = (
    await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkHtml)
      .process(grayFile.content)
  ).toString();

  return {
    meta: grayFile.data,
    content,
  };
};

// To Process HTML from string
export const getProcessedHtml: GetProcessedHtml<TFileContent> = async (
  content
) => {
  const processedHtmlString = (
    await unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeStringify)
      .process(content)
  ).toString();
  return processedHtmlString;
};

// Get all catch-all paths
export const getGuidePaths: GetGuidePaths<{ guide: string[] }> = async () => {
  const files = await getFilesOfDir(guideDirPath);
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

// Get contents from slug
export const getContentsFromSlug: GetContentsFromSlug = async (slug) => {
  const filePath = path.join(guideDirPath, `${slug}.mdx`);
  const file = await fs.readFile(filePath);

  const { data, content } = matter(file);
  const mdxSouce = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        withCodeBlocks,
        rehypePrism,
        [
          withSyntaxHighlighting,
          {
            ignoreMissing: true,
          },
        ],
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: `wrap` }],
        // [toc, { headings: ['h1', 'h2'] }],
      ],
    },
  });

  // Extracting DirName and FileName from catch-all-params
  const slugArr = slug.split('/');
  let dirName = ``;
  let fileName = ``;
  if (slugArr.length >= 2) {
    dirName = slugArr[slugArr.length - 2].split('-').join(' ');
    fileName = slugArr[slugArr.length - 1].split('-').join(' ');
  } else if (slugArr.length === 1) {
    fileName = slugArr[slugArr.length - 1].split('-').join(' ');
  }

  return {
    meta: {
      dirName,
      fileName,
      title: data?.title ?? null,
      description: data?.description ?? null,
      author: data?.author ?? null,
      edit: process.env.REPO + `/guides/${slug}.mdx`,
    },
    source: mdxSouce,
  };
};

// Get all Document paths as a Menu
export const getDocumentsMenu: GetDocumentsMenu = async () => {
  const dirs = await fs.readdir(guideDirPath, { withFileTypes: true });

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
    const fileNames = await fs.readdir(path.join(guideDirPath, dir.name));
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
