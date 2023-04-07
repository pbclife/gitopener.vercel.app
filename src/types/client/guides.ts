/* eslint-disable no-unused-vars */
export type TGuideMeta = {
  title?: string;
  tldr?: string;
  tags?: string[];
};

export type TGuideFile = {
  href: string;
  filePath: string;
  priority: Array<number | null>;
  title?: string;
  tldr?: string;
};

export declare type GetAllGuides = (
  dir: string
) => TGuideFile[] | Promise<TGuideFile[]>;

export declare type GetFilePaths = (
  dirPath: string,
  toRem?: string
) => Promise<string[]>;
