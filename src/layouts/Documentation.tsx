import Footer from '@/components/footer';
import { BreadCrumb, Menu, MobileMenu } from '@/components/guidespage';
import MenuComp from '@/components/menu';
import useArea from '@/hooks/useArea';
import { FolderStructure } from '@/types/client/FileSystem';
import Head from 'next/head';
import type { ComponentProps, FC } from 'react';
import Container from './Container';

export type DocumentationProps = ComponentProps<'div'> & {
  title?: string;
  description?: string;
  menu: FolderStructure;
  dir?: string;
};

const Documentation: FC<DocumentationProps> = ({
  title = 'Git Opener',
  description = 'Open source student community to learn and getting started with open-source',
  className,
  menu,
  dir,
  ...props
}) => {
  const { width } = useArea();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="z-0 bg-skin-base text-skin-base">
        {/* Menu  */}
        <div className="sticky top-0 z-10">
          <MenuComp docs />
        </div>
        <Container className="z-0 px-0">
          <div className="grid grid-cols-1 lg:grid-cols-16 lg:gap-4">
            {width >= 1024 && (
              <aside className="sticky inset-x-0 top-24 h-fit flex-shrink lg:col-span-4 ">
                <Menu data={menu} />
              </aside>
            )}
            <article className="relative z-0 border border-t-0 border-skin-base pb-4 lg:col-span-full lg:col-start-5">
              {/* breadcrumb */}
              <div className="sticky inset-x-0 top-16 z-10 flex min-h-16 w-full items-center gap-x-4 border-b border-skin-base bg-skin-base px-4 md:top-20">
                {width < 1024 && <MobileMenu data={menu} />}
                <BreadCrumb last={dir} />
              </div>
              {/* outlet */}
              <div className={`bg-skin-base ${className || ``}`} {...props} />
            </article>
          </div>
        </Container>
        <Footer />
      </section>
    </>
  );
};

export default Documentation;
