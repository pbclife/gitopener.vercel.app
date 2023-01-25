import type { FolderStructure } from '@/types/client/FileSystem';
import type { ComponentProps, FC } from 'react';
import SubLinks from './SubLinks';

type MenuProps = ComponentProps<'ul'> & {
  data: FolderStructure;
};

const MenuList: FC<MenuProps> = ({ data, className, ...props }) => {
  const folders = [
    'starting-contribution',
    ...Object.keys(data).filter((dir) => dir !== 'starting-contribution'),
  ];

  function beautify(str: string) {
    return str.split('-').join(' ');
  }
  return (
    <ul
      className={`h-fit max-h-[calc(100vh-7rem)] space-y-6 overflow-auto ${
        className || ``
      }`}
      {...props}
    >
      {folders.map((folder) => (
        <li key={folder} className="font-medium capitalize">
          {beautify(folder)}
          <SubLinks fileList={data[folder]} />
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
