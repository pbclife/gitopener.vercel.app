import Footer from '@/components/footer';
import { BreadCrumb, DocList } from '@/components/guidespage';
import DocEditIcon from '@/components/icons/DocEdit';
import MenuComp from '@/components/menu';
import ToolTip from '@/components/utilities/Tooltip';
import useArea from '@/hooks/useArea';
import { FolderStructure, Post } from '@/types/client/FileSystem';
import Head from '@utilities/Head';
import type { ComponentProps, FC } from 'react';
import Container from './Container';

export type DocumentationLayoutProps = ComponentProps<'div'> & {
  meta: Post['meta'];
  menu: FolderStructure;
};

const DocumentationLayout: FC<DocumentationLayoutProps> = ({
  meta,
  className,
  menu,
  ...props
}) => {
  const { width } = useArea();

  return (
    <>
      <Head title={meta.title} description={meta.description} />
      <section className="z-0 bg-skin-base text-skin-base">
        {/* Menu  */}
        <div className="sticky top-0 z-10">
          <MenuComp docs />
        </div>
        <Container className="z-0 px-0">
          <div className="grid grid-cols-1 lg:grid-cols-16 lg:gap-2 ">
            {width >= 1024 && (
              <aside className="sticky inset-x-0 top-20 h-fit flex-shrink overflow-y-auto p-4 lg:col-span-4">
                <DocList data={menu} />
              </aside>
            )}
            <article className="relative z-0 border border-t-0 border-skin-base pb-4 lg:col-span-full lg:col-start-5">
              {/* breadcrumb */}
              <div className="sticky inset-x-0 top-16 z-10 flex min-h-16 w-full items-center justify-between border-b border-skin-base bg-skin-base/80 px-4 backdrop-blur-md sm:px-8 md:top-20">
                <div className="flex items-center gap-x-4">
                  {width < 1024 && <DocList mobile data={menu} />}
                  <BreadCrumb dirName={meta.dirName} fileName={meta.fileName} />
                </div>
                <a href={meta.edit}>
                  <ToolTip tip="Edit on Github" direction="button">
                    <DocEditIcon className="h-6 w-6" />
                  </ToolTip>
                </a>
              </div>
              {/* outlet */}
              <div
                className={`overflow-hidden bg-skin-base ${className || ``}`}
                {...props}
              />
            </article>
          </div>
        </Container>
        <Footer />
      </section>
    </>
  );
};

export default DocumentationLayout;
