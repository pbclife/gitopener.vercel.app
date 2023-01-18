import Link from 'next/link';
import { FC, ReactNode, useEffect } from 'react';
import type { Url } from 'url';

type Props = {
  href: Url | string;
  children: ReactNode;
};

const SmoothLink: FC<Props> = ({ href, children }) => {
  useEffect(() => {
    function ScrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    ScrollToTop();
  }, []);

  return (
    <Link scroll={false} href={href}>
      {children}
    </Link>
  );
};

export default SmoothLink;
