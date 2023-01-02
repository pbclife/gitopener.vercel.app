import { fetchAllContributors } from 'lib/contributors';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import { TCont } from 'types/contributors';

export type ContributorsProps = {
  contributors: TCont[];
};

const Contributors: FC<ContributorsProps> = ({ contributors }) => {
  console.log(contributors);

  return <>Contributors</>;
};

export default Contributors;

export const getStaticProps: GetStaticProps<ContributorsProps> = async () => {
  try {
    // fetch all contributors limit 10
    const contributors = await fetchAllContributors(10);
    return {
      props: {
        contributors,
      },
      revalidate: 15,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
