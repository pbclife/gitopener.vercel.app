import type { FolderStructure } from '@/types/client/FileSystem';
import NextIcon from '@icons/NextIcon';
import PrevIcon from '@icons/PrevIcon';
import { useRouter } from 'next/router';
import type { FC } from 'react';

interface NavigationButtonProps {
  menu: FolderStructure;
  activeLink: string;
}

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
  const prevRoute =
    route > 0 && links[route - 1]?.split('/').pop()?.split('-').join(' ');
  const nextRoute =
    route < links.length - 1 &&
    links[route + 1]?.split('/').pop()?.split('-').join(' ');

  const handlePrevClick = () => {
    if (route === 0) return;
    router.push(`${links[route - 1]}`);
  };

  const handleNextClick = () => {
    if (route === links.length - 1) return;
    router.push(`${links[route + 1]}`);
  };

  return (
    <div
      className={`mt-6 flex w-full items-center  ${
        !prevRoute ? 'justify-end' : 'justify-between'
      }`}
    >
      {prevRoute && (
        <button
          onClick={handlePrevClick}
          className={`flex items-center gap-2 self-start text-lg font-medium capitalize text-white`}
        >
          <PrevIcon className="h-5 w-5 text-skin-base" />
          {prevRoute}
        </button>
      )}
      {nextRoute && (
        <button
          onClick={handleNextClick}
          className={`flex items-center gap-2 self-end text-lg font-medium capitalize text-white`}
        >
          {nextRoute}
          <NextIcon className="h-5 w-5 text-skin-base" />
        </button>
      )}
    </div>
  );
};

export default NavigationButton;
