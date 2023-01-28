import mdxComponents from '@/components/mdxcomponents';
import TypoComp from '@/components/utilities/TypoComponent';
import Container from '@/layouts/Container';
import DocumentationLayout from '@/layouts/DocumentationLayout';
import {
  getContentsFromSlug,
  getDocumentsMenu,
  getGuidePaths,
} from '@/lib/readDocs';
import type { FolderStructure, Post } from '@/types/client/FileSystem';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';

type DocsProps = Post & {
  menu: FolderStructure;
};

const Guides: NextPage<DocsProps> = ({ menu, meta, source }) => {
  return (
    <DocumentationLayout menu={menu} meta={meta} className="text-skin-base">
      <Container className="relative py-4">
        <TypoComp className="max-w-full text-skin-base prose-h5:font-semibold prose-h5:capitalize prose-h5:text-accent">
          <h5>{meta.dirName || meta.fileName}</h5>
          <MDXRemote {...source} components={mdxComponents} />
        </TypoComp>
      </Container>
    </DocumentationLayout>
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
