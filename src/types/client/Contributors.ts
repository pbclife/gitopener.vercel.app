import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type Contribution = {
  source: MDXRemoteSerializeResult;
  meta: {
    [key: string]: string | number;
  } & {
    author: string;
    github_username: string;
    occupation: string;
  };
};
