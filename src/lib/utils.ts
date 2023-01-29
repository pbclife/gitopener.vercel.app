import { PrepareMeta } from '@/types/client/FileSystem';
import beautify from '@/utils/beautify';
import { promises as fs } from 'fs';

export const getFilesOfDir = async (dirName: string, rem = dirName) => {
  let files: string[] = [];
  const items = await fs.readdir(dirName, { withFileTypes: true });

  for (const item of items) {
    if (item.isDirectory()) {
      files = [
        ...files,
        ...(await getFilesOfDir(`${dirName}/${item.name}`, dirName)),
      ];
    } else {
      const path = `${dirName}/${item.name}`;
      files.push(path.replace(rem, ''));
    }
  }

  return files;
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
    dirName,
    fileName,
    title: data?.title || ``,
    description: data?.description || ``,
    author: data?.author || ``,
    edit: process.env.REPO + `/guides/${slug}.mdx`,
  };

  return meta;
};
