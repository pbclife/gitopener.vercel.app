import type { TCont } from '&validation/contributor.validation';
import NewContributrs from '@/components/contributorpage/NewContributrs';
import OldContributrs from '@/components/contributorpage/OldContributrs';
import Container from '@layouts/container';
import Layout from '@layouts/main';
import { fetchNewContributors, fetchOldContributors } from 'lib/contributors';
import { GetStaticProps } from 'next';
import { FC } from 'react';

interface TContributors extends TCont {
  _id: string;
}

export type ContributorsProps = {
  newContributors: TContributors[];
  oldContributors: TContributors[];
};

const Contributors: FC<ContributorsProps> = ({
  newContributors,
  oldContributors,
}) => {
  return (
    <Layout className="min-h-screen" title="Git Opener | Contributors">
      <Container className="py-4">
        <NewContributrs contributors={newContributors} />
        <OldContributrs contributors={oldContributors} />
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

    return {
      props: {
        newContributors,
        oldContributors,
      },
      revalidate: 15,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
