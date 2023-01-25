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
