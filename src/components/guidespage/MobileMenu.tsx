import type { FolderStructure } from '@/types/client/FileSystem';
import { Menu } from '@headlessui/react';
import { Bars2Icon } from '@heroicons/react/20/solid';
import type { FC } from 'react';
import SubLinksSm from './SubLinksSm';

type MenuProps = {
  data: FolderStructure;
};

const MobileMenu: FC<MenuProps> = ({ data }) => {
  const folders = [
    'starting-contribution',
    ...Object.keys(data).filter((dir) => dir !== 'starting-contribution'),
  ];

  function beautify(str: string) {
    return str.split('-').join(' ');
  }

  return (
    <Menu as="div" className={`relative `}>
      <Menu.Button className="flex items-center justify-center">
        <Bars2Icon className="h-6 w-6" />
      </Menu.Button>
      <Menu.Items className="fixed inset-0 top-32 z-0 h-fit max-h-[calc(100vh-31rem)] w-full max-w-xs overflow-auto rounded-md border border-skin-base bg-skin-base p-4 sm:top-36 sm:ml-6">
        {folders.map((folder) => (
          <li key={folder} className="font-medium capitalize">
            {beautify(folder)}
            <SubLinksSm fileList={data[folder]} />
          </li>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default MobileMenu;
