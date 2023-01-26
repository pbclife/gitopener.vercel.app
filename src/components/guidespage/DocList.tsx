import { useDocumentationContext } from '@/context/DocumentationContext';
import type { FolderStructure } from '@/types/client/FileSystem';
import { Bars2Icon } from '@heroicons/react/20/solid';
import type { ComponentProps, FC } from 'react';
import DocListForMobile from './DocListForMobile';
import SidebarLinks from './SidebarLinks';

type DocListProps = ComponentProps<'ul'> & {
  data: FolderStructure;
  mobile?: boolean;
};

const DocList: FC<DocListProps> = ({ data, mobile = false, ...props }) => {
  // state
  const { openSidebar, closeSidebar } = useDocumentationContext();

  if (mobile)
    return (
      <>
        <button
          onClick={openSidebar}
          className="grid place-items-center rounded-full p-1 outline-none hover:bg-skin-shine"
        >
          <Bars2Icon className="h-6 w-6" />
        </button>
        <DocListForMobile>
          <SidebarLinks
            data={data}
            performOnLinkClick={closeSidebar}
            {...props}
          />
        </DocListForMobile>
      </>
    );
  return <SidebarLinks data={data} {...props} />;
};

export default DocList;
