import HeroLinks from '@/data/HeroLinks';
import { links } from '@/data/menu-links';
import Link from 'next/link';
import { FC } from 'react';

const FooterList: FC = () => {
  return (
    <div className="space-y-6">
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
        {links.map((link, indx) => (
          <Link href={link.to} key={link.title + indx}>
            <li className="cursor-pointer transition-colors duration-200 ease-in-out hover:text-accent">
              {link.title}
            </li>
          </Link>
        ))}
      </ul>
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
        {HeroLinks.map((link, indx) => (
          <Link href={link.href} key={link.title + indx}>
            <li className="flex cursor-pointer items-center gap-x-2 transition-colors duration-200 ease-in-out hover:text-accent">
              <link.Icon className="h-5 w-5" />
              {link.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
