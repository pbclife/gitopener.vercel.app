import type { PostFile } from '@/types/client/FileSystem';
import { Menu } from '@headlessui/react';
import Link from 'next/link';
import { FC, Fragment } from 'react';

type SubLinksSmProps = {
  fileList: PostFile[];
};

const SubLinksSm: FC<SubLinksSmProps> = ({ fileList }) => {
  fileList = [
    ...fileList.filter((file) => file.name === 'welcome'),
    ...fileList.filter((file) => file.name !== 'welcome'),
  ];
  function beautify(str: string) {
    return str.split('-').join(' ');
  }

  return (
    <ol className="my-2 text-sm font-normal text-skin-muted">
      {fileList.map((file, indx) => (
        <li
          key={file.name + indx}
          className="border-l border-skin-base py-1 pl-4 hover:border-accent"
        >
          <Menu.Item as={Fragment}>
            {({ close }) => {
              return (
                <Link href={file.link} onClick={close}>
                  {beautify(file.name)}
                </Link>
              );
            }}
          </Menu.Item>
        </li>
      ))}
    </ol>
  );
};

export default SubLinksSm;
