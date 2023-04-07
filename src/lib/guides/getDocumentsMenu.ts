import { FolderStructure, GetDocumentsMenu } from '@/types/client/FileSystem';
import fs from 'fs/promises';
import path from 'path';
import { removePriorityBit } from '../utils';

const guideDirPath = path.join(process.cwd(), 'docs', 'guides');

// Get all Document paths as a Menu
export const getDocumentsMenu: GetDocumentsMenu = async () => {
  const dirs = await fs.readdir(guideDirPath, { withFileTypes: true });

  const menu: FolderStructure = {};
  const regX = /\.mdx|\.md$/;

  for (const dir of dirs) {
    if (!dir.isDirectory()) {
      const fileName = removePriorityBit(dir.name.replace(regX, ''));
      menu[fileName] = [];
      menu[fileName].push({
        name: fileName,
        link: `/guides/${fileName}`,
      });
      continue;
    }
    const fileNames = await fs.readdir(path.join(guideDirPath, dir.name));
    const fileNamesWithoutExt = fileNames.map((fileName) =>
      removePriorityBit(fileName.replace(regX, ''))
    );
    const dirName = removePriorityBit(dir.name);
    menu[dirName] = fileNamesWithoutExt.map((fileName) => {
      return {
        name: fileName,
        link: `/guides/${dirName}/${fileName}`,
      };
    });
  }

  return menu;
};
