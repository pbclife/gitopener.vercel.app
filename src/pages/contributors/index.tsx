import NewContributrs from '@/components/contributorpage/NewContributrs';
import OldContributrs from '@/components/contributorpage/OldContributrs';
import PopularContributrs from '@/components/contributorpage/PopularContributrs';
import {
  fetchNewContributors,
  fetchOldContributors,
  fetchPopularContributors,
} from '@/lib/contributors';
import type { TCont } from '@/types/server/Contributors';
import Container from '@layouts/Container';
import Layout from '@layouts/Main';
import { GetStaticProps } from 'next';
import type { FC } from 'react';

interface TContributors extends TCont {
  _id: string;
}

export type ContributorsProps = {
  newContributors: TContributors[];
  oldContributors: TContributors[];
  popularContributors: TContributors[];
};

const Contributors: FC<ContributorsProps> = ({
  newContributors,
  oldContributors,
  popularContributors,
}) => {
  return (
    <Layout className="min-h-screen" title="Git Opener | Contributors">
      <Container className="overflow-hidden py-4">
        <NewContributrs contributors={newContributors} />
        <OldContributrs contributors={oldContributors} />
        <PopularContributrs contributors={popularContributors} />
      </Container>
    </Layout>
  );
};

export default Contributors;

export const getStaticProps: GetStaticProps<ContributorsProps> = async () => {
  try {
    // fetch all contributors limit 10
    const { contributors: newContributors } = await fetchNewContributors(6);
    const { contributors: oldContributors } = await fetchOldContributors(6);
    const { contributors: popularContributors } =
      await fetchPopularContributors(6);

    return {
      props: {
        newContributors,
        oldContributors,
        popularContributors,
      },
      revalidate: 15,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
