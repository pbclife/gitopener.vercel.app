import { getFileContents, getProcessedHtml } from '@/lib/readDocs';
import type { TFileContent } from '@/types/client/FileSystem';
import Container from '@layouts/Container';
import Layout from '@layouts/Main';
import RenderMdx from '@utilities/RenderMdx';
import type { GetStaticProps, NextPage } from 'next';

type HomeProps = {
  heading: TFileContent;
  techStack: TFileContent;
  installation: TFileContent;
};

const Home: NextPage<HomeProps> = ({ heading, techStack, installation }) => {
  return (
    <Layout className="relative z-0 overflow-hidden ">
      <div className="absolute inset-0 backdrop-blur-xl bg-square-slate-500/10 [mask-image:linear-gradient(-90deg,rgba(255,255,255,0),white,rgba(255,255,255,0),rgba(255,255,255,0))] " />
      <Container className={`min-h-screen py-8`}>
        <RenderMdx data={heading} />
        <RenderMdx data={techStack} />
        <RenderMdx data={installation} />
      </Container>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const heading = await getFileContents('heading');
  const headingHtml = await getProcessedHtml(heading.content);

  const techStack = await getFileContents('tech-stack');
  const techStackHtml = await getProcessedHtml(techStack.content);

  const installation = await getFileContents('installation');
  const installationHtml = await getProcessedHtml(installation.content);

  return {
    props: {
      heading: {
        meta: heading.meta,
        content: headingHtml,
      },
      techStack: {
        meta: techStack.meta,
        content: techStackHtml,
      },
      installation: {
        meta: installation.meta,
        content: installationHtml,
      },
    },
  };
};
