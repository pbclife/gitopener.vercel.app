import Footer from '@components/footer';
import Header from '@components/header';
import Menu from '@components/menu';
import Head from 'next/head';
import React from 'react';

export type LayoutProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'Git Opener',
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
        {/* Menu  */}
        <div className="sticky top-0">
          <Menu />
        </div>
        {/* outlet */}
        <div className="bg-skin-base">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
