import type { FolderStructure } from '@/types/client/FileSystem';
import beautify from '@/utils/beautify';
import type { ComponentProps, FC } from 'react';
import SubLinks from './SubLinks';

type SidebarLinksProps = ComponentProps<'ul'> & {
  data: FolderStructure;
  performOnLinkClick?(): void;
};

const SidebarLinks: FC<SidebarLinksProps> = ({
  data,
  className,
  performOnLinkClick,
  ...props
}) => {
  // additional functionalities
  const folders = [
    'starting-contribution',
    ...Object.keys(data).filter((dir) => dir !== 'starting-contribution'),
  ];

  // JSX
  return (
    <ul
      className={`h-fit max-h-[calc(100vh-7rem)] space-y-6 ${className || ``}`}
      {...props}
    >
      {folders.map((folder) => (
        <li key={folder} className="text-lg font-medium capitalize">
          {beautify(folder)}
          <SubLinks onLinkClick={performOnLinkClick} fileList={data[folder]} />
        </li>
      ))}
    </ul>
  );
};

export default SidebarLinks;
