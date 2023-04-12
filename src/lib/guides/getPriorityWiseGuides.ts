import {
  extractPriorityFromSlug,
  getFilesPaths,
  getSlugArr,
  removeExtensions,
  selectFilesByExtension,
} from './utils';

export const getPriorityWiseGuides = async (targetDir: string) => {
  const filesSlug = await getFilesPaths(targetDir);
  const onlyMdxFiles = selectFilesByExtension(filesSlug, 'mdx');
  const withoutExtensions = removeExtensions(onlyMdxFiles);
  const slugArr = getSlugArr(withoutExtensions);
  const priorityWiseSlugs = extractPriorityFromSlug(slugArr);
  return priorityWiseSlugs;
};
