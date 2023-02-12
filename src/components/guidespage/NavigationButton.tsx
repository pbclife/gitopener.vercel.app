import type { FolderStructure } from '@/types/client/FileSystem';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/router';
import type { FC } from 'react';

interface NavigationButtonProps {
  menu: FolderStructure;
  activeLink: string;
}

const NavigationButton: FC<NavigationButtonProps> = ({ menu }) => {
  const router = useRouter();

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
    <div className={`mt-16 flex w-full items-center justify-between`}>
      <div className="">
        {prevRoute && (
          <button
            onClick={handlePrevClick}
            className={`flex items-center gap-1 font-semibold capitalize text-skin-base transition-all duration-300 ease-in-out hover:text-accent`}
          >
            <ChevronLeftIcon className="h-4 w-4 " />
            {prevRoute}
          </button>
        )}
      </div>
      <div className="">
        {nextRoute && (
          <button
            onClick={handleNextClick}
            className={`flex items-center gap-1 font-medium capitalize text-skin-base transition-all duration-300 ease-in-out hover:text-accent`}
          >
            {nextRoute}
            <ChevronRightIcon className="h-4 w-4 " />
          </button>
        )}
      </div>
    </div>
  );
};

export default NavigationButton;
