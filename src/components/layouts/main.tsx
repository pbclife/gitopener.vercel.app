import Footer from '@components/footer';
import Header from '@components/header';
import Menu from '@components/menu';
import Head from 'next/head';
import React, { ComponentProps } from 'react';

export type LayoutProps = ComponentProps<'div'> & {
  title?: string;
  description?: string;
};

const Layout: React.FC<LayoutProps> = ({
  title = 'Git Opener',
  description = 'Open source student community to learn and getting started with open-source',
  className,
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
      <section className="z-0">
        <Header />
        {/* Menu  */}
        <div className="sticky top-0 z-10">
          <Menu />
        </div>
        {/* outlet */}
        <div className={`bg-skin-base ${className || ``}`} {...props} />
        <Footer />
      </section>
    </>
  );
};

export default Layout;
