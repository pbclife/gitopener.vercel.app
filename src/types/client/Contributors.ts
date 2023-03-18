import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type Contribution = {
  source: MDXRemoteSerializeResult;
  meta: {
    [key: string]: string | number;
  } & {
    author: string;
    github_username: string;
    occupation: string;
    pronouns?: string;
    github?: string;
    twitter?: string;
    linkedin?: string;
    portfolio_website?: string;
    devpost?: string;
    discord?: string;
    youtube?: string;
    instagram?: string;
    facebook?: string;
    medium?: string;
    hashnode?: string;
    dribble?: string;
  };
};
