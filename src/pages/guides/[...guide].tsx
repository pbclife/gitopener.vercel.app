import NavigationButton from '@/components/guidespage/NavigationButton';
import mdxComponents from '@/components/mdxcomponents';
import TypoComp from '@/components/utilities/TypoComponent';
import { useDocumentationContext } from '@/context/DocumentationContext';
import Container from '@/layouts/Container';
import DocumentationLayout from '@/layouts/DocumentationLayout';
import { getAllGuides, getDocumentsMenu } from '@/lib/guides';
import { getContentsFromSlug, getGuidePaths } from '@/lib/readDocs';
import type { FolderStructure, Post } from '@/types/client/FileSystem';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { useEffect } from 'react';

type DocsProps = Post & {
  menu: FolderStructure;
  activeLink: string;
};

const Guides: NextPage<DocsProps> = ({ activeLink, menu, meta, source }) => {
  const { setActiveLink } = useDocumentationContext();

  useEffect(() => {
    setActiveLink(`/guides/${activeLink}`);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeLink]);

  return (
    <DocumentationLayout menu={menu} meta={meta} className="text-skin-base">
      <Container className="relative">
        <TypoComp className="min-h-screen-50 max-w-full py-4 text-skin-base prose-h5:font-semibold prose-h5:capitalize prose-h5:text-accent">
          <h5>{meta.dirName || meta.fileName}</h5>
          <MDXRemote {...source} components={mdxComponents} />
        </TypoComp>
        <NavigationButton menu={menu} activeLink={activeLink} />
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
    const guides = await getAllGuides('docs/guides');

    const { guide } = params as { guide: string[] };
    const activeLink = guide.join('/');

    const filePath = guides.find((g) => g.href === activeLink)?.filePath;
    if (!filePath) throw new Error('File path not found');

    const { meta, source } = await getContentsFromSlug(filePath);
    return {
      props: {
        meta,
        source,
        menu,
        activeLink,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      notFound: true,
    };
  }
};
