import type { TCont } from '&validation/contributor.validation';
import NewContributrs from '@/components/contributorpage/NewContributrs';
import Container from '@layouts/container';
import Layout from '@layouts/main';
import { fetchAllContributors } from 'lib/contributors';
import { GetStaticProps } from 'next';
import { FC } from 'react';

export type ContributorsProps = {
  count: number;
  contributors: (TCont & { _id: string })[];
};

const Contributors: FC<ContributorsProps> = ({ contributors }) => {
  return (
    <Layout className="min-h-screen" title="Git Opener | Contributors">
      <Container className="py-4">
        <NewContributrs contributors={contributors} />
      </Container>
    </Layout>
  );
};

export default Contributors;

export const getStaticProps: GetStaticProps<ContributorsProps> = async () => {
  try {
    // fetch all contributors limit 10
    const data = await fetchAllContributors(10);

    return {
      props: {
        count: data.count,
        contributors: data.contributors,
      },
      revalidate: 15,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
