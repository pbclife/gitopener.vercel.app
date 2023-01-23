import type {
  GetFileContents,
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

const docsDir = path.join(process.cwd(), 'docs');
type TSuppordedFile = 'heading' | 'installation' | 'tech-stack';

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
