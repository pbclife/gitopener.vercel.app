import { links } from '@/data/MenuLinks';
import type { PostFile } from '@/types/client/FileSystem';
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

type TDocumentationContext = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  activeLink: string;
  setActiveLink: Dispatch<SetStateAction<string>>;
  openSidebar(): void;
  closeSidebar(): void;
};

const DocumentationContext = createContext<TDocumentationContext>({
  isSidebarOpen: false,
  setIsSidebarOpen: () => {},
  activeLink: ``,
  setActiveLink: () => {},
  openSidebar: () => {},
  closeSidebar: () => {},
});

type DocumentationProps = {
  children: ReactNode;
};

// Context Provider
const DocumentationProvider: FC<DocumentationProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<PostFile['link']>(``);

  useEffect(() => {
    setActiveLink(links[2].to);
    return () => setActiveLink(``);
  }, []);

  // Functions...
  function openSidebar() {
    setIsSidebarOpen(true);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  const value: TDocumentationContext = {
    isSidebarOpen,
    setIsSidebarOpen,
    activeLink,
    setActiveLink,
    openSidebar,
    closeSidebar,
  };

  return (
    <DocumentationContext.Provider value={value}>
      {children}
    </DocumentationContext.Provider>
  );
};

export default DocumentationProvider;

export const useDocumentationContext = () => useContext(DocumentationContext);
