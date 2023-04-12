import { getMdxContent } from '@/lib/mdx/getMdxContent';
import { prepareMeta } from '@/lib/utils';
import type {
  GetContentsFromSlug,
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
import { getPriorityWiseGuides } from './guides/getPriorityWiseGuides';
import withStyledLi from './mdx/rehype/withStyledLi';

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
  const slugsWithPriority = await getPriorityWiseGuides(guideDirPath);
  return slugsWithPriority.map((slugWithPriority) => {
    return {
      params: {
        guide: slugWithPriority.map((s) => s.slug),
      },
    };
  });
};

// Get contents from slug
export const getContentsFromSlug: GetContentsFromSlug = async (slug) => {
  const filePath = path.join(guideDirPath, `${slug}.mdx`);
  const file = await fs.readFile(filePath);

  const { data, content } = matter(file);
  const source = await getMdxContent(content, withStyledLi);

  // Extracting DirName and FileName from catch-all-params
  const meta = prepareMeta(data, slug);

  return {
    meta,
    source,
  };
};
