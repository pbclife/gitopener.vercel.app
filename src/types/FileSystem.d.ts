/* eslint-disable no-unused-vars */
export declare type TFileContent = {
  meta: {
    [key: string]: unknown;
  };
  content: string;
};

export declare type GetFileContents<T> = (fileName: T) => Promise<TFileContent>;
export declare type GetProcessedHtml<T extends { content }> = (
  content: T['content']
) => Promise<string>;
