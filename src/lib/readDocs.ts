import { getMdxContent } from '@/lib/mdx/getMdxContent';
import {
  getFilesHasExtension,
  getFilesOfDir,
  prepareMeta,
  removeExtension,
} from '@/lib/utils';
import type {
  FolderStructure,
  GetContentsFromSlug,
  GetDocumentsMenu,
  GetFileContents,
  GetGuidePaths,
  GetProcessedHtml,
  TFileContent,
} from '@/types/client/FileSystem';
import { promises as fs } from 'fs';
import matter from 'gray-matter';
import path from 'path';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';
import { unified } from 'unified';

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
  const source = await getMdxContent(content);

  // Extracting DirName and FileName from catch-all-params
  const meta = prepareMeta(data, slug);

  return {
    meta,
    source,
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
