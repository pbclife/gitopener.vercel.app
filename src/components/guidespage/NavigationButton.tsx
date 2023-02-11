import type { FolderStructure } from '@/types/client/FileSystem';
import { useRouter } from 'next/router';
import type { FC } from 'react';

interface NavigationButtonProps {
  menu: FolderStructure;
  activeLink: string;
}

const disabledLink = `bg-gray-600 cursor-not-allowed `;

const NavigationButton: FC<NavigationButtonProps> = ({ menu, activeLink }) => {
  const router = useRouter();

  const folders = [
    'starting-contribution',
    ...Object.keys(menu).filter((dir) => dir !== 'starting-contribution'),
  ];

  const links = Object.entries(menu)
    .sort((a, b) =>
      a[0] === 'starting-contribution'
        ? -1
        : b[0] === 'starting-contribution'
        ? 1
        : 0
    )
    .flatMap(([folderName, folder]) =>
      folderName === 'starting-contribution'
        ? [
            folder.find((item) => item.name === 'welcome'),
            ...folder.filter((item) => item.name !== 'welcome'),
          ]
        : folder
    )
    .flatMap((item) => item?.link);

  let currentRoute = '';
  if (Array.isArray(router.query.guide)) {
    currentRoute = router.query.guide.join('/');
  }
  const route = links.findIndex((link) => link?.endsWith(currentRoute));

  const handlePrevClick = () => {
    if (route === 0) return;
    router.push(`${links[route - 1]}`);
  };

  const handleNextClick = () => {
    if (route === links.length - 1) return;
    router.push(`${links[route + 1]}`);
  };

  return (
    <div className="mt-6 flex w-full items-center justify-between">
      <button
        onClick={handlePrevClick}
        className={`w-fit rounded-md border border-skin-base bg-white px-6 py-1 capitalize text-neutral-800 ${
          route === 0 && disabledLink
        }`}
      >
        Prev
      </button>
      <button
        onClick={handleNextClick}
        className={`w-fit rounded-md border border-skin-base bg-white px-6 py-1 capitalize text-neutral-800  ${
          route === links.length - 1 && disabledLink
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default NavigationButton;
