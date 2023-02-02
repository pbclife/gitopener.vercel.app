import Link from 'next/link';
import type { FC, ReactNode } from 'react';

type LinkCompProps = {
  href?: string;
  children: ReactNode;
};

const LinkComp: FC<LinkCompProps> = ({ href, children }) => {
  const isInternal = href?.startsWith('/') ?? false;
  return href ? (
    isInternal ? (
      <Link href={href}>{children}</Link>
    ) : (
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  ) : (
    <div>{children}</div>
  );
};

export default LinkComp;
