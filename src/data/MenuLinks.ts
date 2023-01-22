import {
  HomeIcon,
  PuzzlePieceIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';
import type { ComponentProps, FC } from 'react';

type MLink = {
  to: string;
  title: string;
  isExternal?: boolean;
  icon: FC<ComponentProps<'svg'>>;
};

export const links: MLink[] = [
  {
    to: `/`,
    icon: HomeIcon,
    title: `Home`,
  },
  {
    to: `/contributors`,
    icon: UserGroupIcon,
    title: `Contributors`,
  },
  {
    to: `/start-contributing`,
    icon: PuzzlePieceIcon,
    title: `Start Contributing`,
  },
];
