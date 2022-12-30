import Head from 'next/head';
import React from 'react';
import Footer from '../footer';
import Header from '../header';

export type LayoutProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'PBC Life',
  description = 'Open source student community to learn and getting started with open-source',
  ...props
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div {...props}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
