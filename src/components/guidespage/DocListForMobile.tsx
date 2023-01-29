import { useDocumentationContext } from '@/context/DocumentationContext';
import { useThemeContext } from '@/context/ThemeContext';
import { Dialog, Transition } from '@headlessui/react';
import Logo from '@utilities/Logo';
import { FC, Fragment, ReactNode } from 'react';

type DocsListForMobileProps = {
  children: ReactNode;
};

const DocListForMobile: FC<DocsListForMobileProps> = ({ children }) => {
  const { mode } = useThemeContext();
  const { isSidebarOpen, setIsSidebarOpen, closeSidebar } =
    useDocumentationContext();

  return (
    <Transition.Root show={isSidebarOpen} as={Fragment}>
      <Dialog
        onClose={setIsSidebarOpen}
        className={`fixed inset-0 z-50 h-screen w-full p-4 ${mode} text-skin-base`}
      >
        <Transition.Child
          enter="transition duration-100 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-300 ease-out"
          leaveFrom=" opacity-100"
          leaveTo=" opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 -z-10 bg-skin-base/50 backdrop-blur-sm " />
        </Transition.Child>
        <Transition.Child
          enter="transition duration-300 ease-out"
          enterFrom="transform -translate-x-full opacity-0"
          enterTo="transform translate-x-0 opacity-100"
          leave="transition duration-300 ease-in"
          leaveFrom="transform translate-x-0 opacity-100"
          leaveTo="transform -translate-x-full opacity-0"
        >
          <Dialog.Panel className="relative h-[calc(100vh-2rem)] w-full max-w-xs overflow-y-auto rounded-lg border border-skin-base bg-skin-base">
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
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default DocListForMobile;
