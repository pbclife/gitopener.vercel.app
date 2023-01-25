import type { PostFile } from '@/types/client/FileSystem';
import Link from 'next/link';
import { FC } from 'react';

type SubLinksProps = {
  fileList: PostFile[];
};

const SubLinks: FC<SubLinksProps> = ({ fileList }) => {
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
          <Link href={file.link}>{beautify(file.name)}</Link>
        </li>
      ))}
    </ol>
  );
};

export default SubLinks;
