/* eslint-disable no-unused-vars */
import { promises as fs } from 'fs';
import matter from 'gray-matter';
import path from 'path';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';
import type { TFileContent } from 'types/file';
import { unified } from 'unified';

const docsDir = path.join(process.cwd(), 'docs');

type TSuppordedFile = 'heading' | 'installation' | 'tech-stack';
declare type GetFileContents = (
  fileName: TSuppordedFile
) => Promise<TFileContent>;
declare type GetProcessedHtml = (
  content: TFileContent['content']
) => Promise<string>;

export const getFileContents: GetFileContents = async (fileName) => {
  const file = await fs.readFile(path.join(docsDir, `${fileName}.mdx`), 'utf8');
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

export const getProcessedHtml: GetProcessedHtml = async (content) => {
  const processedHtmlString = (
    await unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeStringify)
      .process(content)
  ).toString();
  return processedHtmlString;
};
