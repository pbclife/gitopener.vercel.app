import { useDocumentationContext } from '@/context/DocumentationContext';
import type { PostFile } from '@/types/client/FileSystem';
import beautify from '@/utils/beautify';
import Link from 'next/link';
import type { FC } from 'react';

type SubLinksProps = {
  fileList: PostFile[];
  onLinkClick?(): void;
};

const SubLinks: FC<SubLinksProps> = ({ fileList, onLinkClick }) => {
  const { activeLink, setActiveLink } = useDocumentationContext();
  console.log(activeLink);

  fileList = [
    ...fileList.filter((file) => file.name === 'welcome'),
    ...fileList.filter((file) => file.name !== 'welcome'),
  ];

  function handleClick(value: PostFile['link']) {
    if (onLinkClick) {
      onLinkClick();
    }
    setActiveLink(value);
  }

  return (
    <ol className="my-2 space-y-2 border-l border-skin-base font-medium text-skin-muted">
      {fileList.map((file, indx) => {
        const isActive = file.link === activeLink;
        return (
          <li
            key={file.name + indx}
            className={`-ml-px border-l pl-4 hover:border-accent/60
            ${
              isActive
                ? `border-accent font-semibold text-accent`
                : `border-transparent`
            }
          `}
          >
            {isActive ? (
              <button
                type="button"
                onClick={() => handleClick(file.link)}
                className="capitalize outline-none"
              >
                {beautify(file.name)}
              </button>
            ) : (
              <Link href={file.link} onClick={() => handleClick(file.link)}>
                {beautify(file.name)}
              </Link>
            )}
          </li>
        );
      })}
    </ol>
  );
};

export default SubLinks;
