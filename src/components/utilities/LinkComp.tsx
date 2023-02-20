import Link from 'next/link';
import type { FC, ReactNode } from 'react';

type LinkCompProps = {
  href?: string;
  children: ReactNode;
  isCardComp?: boolean;
};

const LinkComp: FC<LinkCompProps> = ({
  href,
  children,
  isCardComp = false,
}) => {
  const isInternal = href?.startsWith('/') ?? false;
  return href ? (
    isInternal ? (
      <Link href={href}>{children}</Link>
    ) : (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${
          isCardComp &&
          `rounded-lg border border-transparent p-0 hover:border-accent prose-p:font-normal`
        }`}
      >
        {children}
      </a>
    )
  ) : (
    <div>{children}</div>
  );
};

export default LinkComp;
