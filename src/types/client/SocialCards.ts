import type { ReactNode } from 'react';

export type SocialCard = {
  activeHere?: boolean;
  children?: ReactNode;
  name: string;
  username: string;
  href: string;
};
