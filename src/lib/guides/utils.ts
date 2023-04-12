import { GetFilePaths } from '@/types/client/guides';
import fs from 'fs/promises';
import path from 'path';
import { z } from 'zod';

export const getFilesPaths: GetFilePaths = async (dirPath, toRem = dirPath) => {
  let files: string[] = [];
  const items = await fs.readdir(dirPath, { withFileTypes: true });
  for (const item of items) {
    if (item.isDirectory()) {
      files = [
        ...files,
        ...(await getFilesPaths(path.join(dirPath, item.name), toRem)),
      ];
    } else {
      const fPath = `${dirPath}/${item.name}`;
      files.push(fPath.replace(toRem, ''));
    }
  }
  return files;
};

export const selectFilesByExtension = (
  filelist: string[],
  ...ext: string[]
): string[] => {
  return filelist.filter((file) => {
    const _ext = file.substring(file.lastIndexOf('.') + 1, file.length);
    return ext.includes(_ext);
  });
};

export const removeExtensions = (filelist: string[]) => {
  return filelist.flatMap((file) => {
    return file.substring(0, file.lastIndexOf('.'));
  });
};

export const getSlugArr = (paths: string[]) => {
  const slugs: string[][] = [];
  paths.forEach((path) => {
    slugs.push([...path.split('/').filter((dir) => dir !== '')]);
  });
  return slugs;
};

export interface ISlugWithPriority {
  slug: string;
  priority: number | null;
}

export const extractPriorityFromSlug = (
  slugs: string[][]
): ISlugWithPriority[][] => {
  const priorityWiseSlugs: ISlugWithPriority[][] = [];
  for (const slugArr of slugs) {
    const pSlugs = slugArr.map((slug) => {
      const isNumber = z.number();
      const priority = isNumber.safeParse(parseInt(slug.split('.')[0])).success
        ? parseInt(slug.split('.')[0])
        : null;
      return {
        priority,
        slug: slug.replace(`${priority}.`, ''),
      };
    });
    priorityWiseSlugs.push(pSlugs);
  }
  return priorityWiseSlugs;
};
