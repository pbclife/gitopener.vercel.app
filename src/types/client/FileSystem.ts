/* eslint-disable no-unused-vars */
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import type { ParsedUrlQuery } from 'querystring';

interface PostMeta {
  title: string;
  author?: string;
  dir?: string;
  edit: string;
}

export interface Post {
  meta: PostMeta;
  source: MDXRemoteSerializeResult;
}

export interface PostFile {
  name: string;
  link: string;
}

export interface FolderStructure {
  [key: string]: PostFile[];
}

export declare type TFileContent = {
  meta: {
    [key: string]: unknown;
  };
  content: string;
};

export declare type GetFileContents<T> = (fileName: T) => Promise<TFileContent>;
export declare type GetProcessedHtml<T extends { content: string }> = (
  content: T['content']
) => Promise<string>;

export declare type GetGuidePaths<P extends ParsedUrlQuery> = () => Promise<
  Array<{
    params: P;
  }>
>;

export declare type GetContentsFromSlug = (
  slug: string
) => Post | Promise<Post>;

export declare type GetDocumentsMenu = () => Promise<FolderStructure>;
