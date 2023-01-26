import NextHead from 'next/head';
import type { FC } from 'react';

type HeadProps = {
  title?: string;
  description?: string;
};

const Head: FC<HeadProps> = ({
  title = 'Git Opener',
  description = 'Open source student community to learn and getting started with open-source',
}) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};

export default Head;
