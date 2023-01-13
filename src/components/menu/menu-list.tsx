import { links } from '@/data/menu-links';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ToolTip from '../utilities/tooltip';

export default function MenuList() {
  const { pathname } = useRouter();
  return (
    <ul className="flex items-center ">
      {links.map((link, indx) => {
        const isActive: boolean = pathname === link.to;
        return (
          <Link href={link.to} key={link.title + indx}>
            <li
              className={`border-b-2 px-4 py-2 text-lg font-semibold capitalize tracking-tight transition-all duration-300 ease-in-out hover:text-accent
            ${isActive ? ` border-accent text-accent ` : `border-transparent`}
            `}
            >
              <ToolTip tip={link.title}>
                <link.icon className="h-6 w-6" />
              </ToolTip>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
