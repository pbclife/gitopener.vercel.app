import fs from 'fs/promises';
import matter from 'gray-matter';

export const getFilecontents = async (filePath: string) => {
  const file = await fs.readFile(filePath);
  const { content, data } = matter(file);
  return {
    meta: data,
    content,
  };
};
