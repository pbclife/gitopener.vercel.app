import TypoComp from '@/components/utilities/TypoComponent';
import Container from '@/layouts/Container';
import Docs from '@/layouts/Documentation';
import {
  getContentsFromSlug,
  getDocumentsMenu,
  getGuidePaths,
} from '@/lib/Guides';
import type { FolderStructure, Post } from '@/types/client/FileSystem';
import { MDXProvider } from '@mdx-js/react';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import { ComponentProps, FC } from 'react';

type MDXComponents = ComponentProps<typeof MDXProvider>['components'];
type DocsProps = Post & {
  menu: FolderStructure;
};

const ResponsiveImg: FC<{
  alt: string;
  src: string;
  width: number;
  height: number;
}> = ({ alt, src, height, width }) => {
  return (
    <Image
      alt={alt}
      src={src}
      width={width}
      height={height}
      className="mb-16 h-64 w-full rounded-md object-cover object-center"
    />
  );
};

const PreCode: FC<ComponentProps<'pre'>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <pre
      className={`relative max-w-xs rounded-none ${className || ``}`}
      {...props}
    >
      <span className="absolute inset-0 h-2 w-full bg-sky-500" />
      {children}
    </pre>
  );
};

const Guides: NextPage<DocsProps> = ({ menu, meta, source }) => {
  const components: MDXComponents = {
    pre: PreCode,
    ResponsiveImg,
  };

  return (
    <Docs menu={menu} dir={meta.dir} className="text-skin-base">
      <Container className="relative py-8">
        <TypoComp>
          <MDXRemote {...source} components={components} />
        </TypoComp>
      </Container>
    </Docs>
  );
};

export default Guides;

export const getStaticPaths: GetStaticPaths<{ guide: string[] }> = async () => {
  const paths = await getGuidePaths();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<DocsProps> = async ({ params }) => {
  try {
    const menu = await getDocumentsMenu();

    const { guide } = params as { guide: string[] };
    const { meta, source } = await getContentsFromSlug(guide.join('/'));

    return {
      props: {
        meta,
        source,
        menu,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
