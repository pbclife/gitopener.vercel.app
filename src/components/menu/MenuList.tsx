import { links } from '@/data/MenuLinks';
import useArea from '@/hooks/useArea';
import SmoothLink from '@utilities/SmoothLink';
import ToolTip from '@utilities/Tooltip';
import { useRouter } from 'next/router';
import type { FC } from 'react';

const MenuList: FC = () => {
  const { pathname } = useRouter();
  const { width } = useArea();
  return (
    <ul className="flex items-center ">
      {links.map((link, indx) => {
        const isNormalScroll: boolean = pathname === link.to;
        return isNormalScroll ? (
          <li
            key={link.title + indx}
            className={`
            border-b-2
            border-accent
            px-4
            py-2
            text-lg
            font-semibold
            capitalize
            tracking-tight
            text-accent
            transition-all
            duration-300
            ease-in-out
            hover:text-accent            
            `}
          >
            <ToolTip
              direction={width < 640 ? `button` : `top`}
              tip={link.title}
            >
              <link.icon className="h-6 w-6" />
            </ToolTip>
          </li>
        ) : (
          <SmoothLink href={link.to} key={link.title + indx}>
            <li
              className={`
              border-b-2
              border-transparent
              px-4
              py-2
              text-lg
              font-semibold
              capitalize
              tracking-tight
              transition-all
              duration-300
              ease-in-out
              hover:text-accent
            `}
            >
              <ToolTip
                direction={width < 640 ? `button` : `top`}
                tip={link.title}
              >
                <link.icon className="h-6 w-6" />
              </ToolTip>
            </li>
          </SmoothLink>
        );
      })}
    </ul>
  );
};

export default MenuList;
