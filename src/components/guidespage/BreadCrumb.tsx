import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { HomeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

interface Crumb {
  title: string;
  Icon: FC<ComponentProps<'svg'>>;
  href: string;
}

const crumbs: Crumb[] = [
  {
    title: `Home`,
    Icon: HomeIcon,
    href: `/`,
  },
];

type BreadCrumbProps = {
  last?: string;
};

const BreadCrumb: FC<BreadCrumbProps> = ({ last }) => {
  return (
    <div className=" flex items-center text-sm font-medium capitalize text-accent ">
      <ul className="">
        {crumbs.map((crumb) => (
          <li key={crumb.title} className="flex list-none items-center">
            <Link
              className="flex items-center gap-x-1 rounded-full p-1 font-semibold text-accent lg:bg-accent/10 lg:px-4"
              href={crumb.href}
            >
              <crumb.Icon className=" h-5 w-5 lg:h-4 lg:w-4" />
              <p className="hidden lg:block">{crumb.title}</p>
            </Link>
            <ChevronRightIcon className="h-5 w-5 text-skin-base " />
          </li>
        ))}
      </ul>
      <p className="font-semibold text-skin-muted">{last}</p>
    </div>
  );
};

export default BreadCrumb;
