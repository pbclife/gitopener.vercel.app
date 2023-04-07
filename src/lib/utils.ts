import { Contribution } from '@/types/client/Contributors';
import { PrepareMeta } from '@/types/client/FileSystem';
import beautify from '@/utils/beautify';

export const removePriorityBit = (fileName: string) => {
  return fileName.substring(fileName.indexOf('.') + 1, fileName.length);
};

export const removeExtension = (path: string) => {
  return path.substring(0, path.lastIndexOf('.'));
};

export const getExtension = (path: string) => {
  return path.substring(path.lastIndexOf('.') + 1, path.length) || path;
};

export const getFilesHasExtension = (
  fileList: string[],
  ...extensions: string[]
) => {
  return fileList.filter((file) => {
    const _ext = getExtension(file);
    return extensions.includes(_ext);
  });
};

export const prepareMeta: PrepareMeta = (data, slug) => {
  const slugArr = slug.split('/');
  let dirName = ``;
  let fileName = ``;
  if (slugArr.length >= 2) {
    dirName = beautify(slugArr[slugArr.length - 2]);
    fileName = beautify(slugArr[slugArr.length - 1]);
  } else if (slugArr.length === 1) {
    fileName = beautify(slugArr[slugArr.length - 1]);
  }
  const meta: ReturnType<PrepareMeta> = {
    dirName: removePriorityBit(dirName),
    fileName: removePriorityBit(fileName),
    title: data?.title || ``,
    description: data?.description || ``,
    author: data?.author || ``,
    edit: process.env.REPO + `/guides/${slug}.mdx`,
  };

  return meta;
};

interface StringKeyedObj {
  [key: string]: any;
}
export function assertHasContributionProps(
  data: StringKeyedObj
): asserts data is Contribution['meta'] {
  const mustHaveProps = ['author', 'github_username', 'occupation'];
  const dataKeys = Object.keys(data);
  for (const prop of mustHaveProps) {
    if (!dataKeys.includes(prop)) {
      throw new Error(`Data does not contain ${prop} property`);
    }
  }
}
