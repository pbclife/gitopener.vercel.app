import { useDocumentationContext } from '@/context/DocumentationContext';
import { useThemeContext } from '@/context/ThemeContext';
import { Dialog } from '@headlessui/react';
import Logo from '@utilities/Logo';
import type { FC, ReactNode } from 'react';

type DocsListForMobileProps = {
  children: ReactNode;
};

const DocListForMobile: FC<DocsListForMobileProps> = ({ children }) => {
  const { mode } = useThemeContext();
  const { isSidebarOpen, setIsSidebarOpen, closeSidebar } =
    useDocumentationContext();

  return (
    <Dialog
      open={isSidebarOpen}
      onClose={setIsSidebarOpen}
      className={`fixed inset-0 z-50 h-screen w-full p-4 ${mode} text-skin-base`}
    >
      <Dialog.Overlay className="fixed inset-0 -z-10 bg-skin-base/50 backdrop-blur-sm " />
      <Dialog.Panel className="relative h-full w-full max-w-xs overflow-y-auto rounded-lg border border-skin-base bg-skin-base ">
        {/* top bar */}
        <div className="sticky inset-x-0 top-0 flex items-center justify-between border-b border-skin-base bg-skin-base p-4">
          <Logo normal small />
          <button
            onClick={closeSidebar}
            className="rounded-full bg-skin-inverted px-2 py-0.5 text-sm font-medium text-skin-inverted"
          >
            close
          </button>
        </div>
        {/* links */}
        <div className="p-4">{children}</div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default DocListForMobile;
