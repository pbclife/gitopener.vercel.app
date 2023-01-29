import {
  fetchSingleContributor,
  getContribution,
  getDynamicPaths,
} from '@/lib/contributors';
import type { TContributor } from '@/types/server/Contributors';
import { GetStaticPaths, GetStaticProps } from 'next';
import type { FC } from 'react';

type SingleContributorProps = {
  contributor: Omit<TContributor, 'isDeleted'> & {
    createdAt?: Date;
  };
};

const SingleContributor: FC<SingleContributorProps> = ({ contributor }) => {
  return <>single contributor {contributor.name} </>;
};

export default SingleContributor;

export const getStaticPaths: GetStaticPaths<{ contId: string }> = async () => {
  const paths = await getDynamicPaths();

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<SingleContributorProps> = async ({
  params,
}) => {
  try {
    if (!params?.contId || Array.isArray(params.contId))
      throw new Error(`Please specify a single contributor id`);
    const contribution = await getContribution(params.contId); // autometically throws error if file not found
    const contributor = await fetchSingleContributor(
      contribution.meta.github_username as string,
      contribution
    );

    return {
      props: {
        contributor,
      },
      revalidate: 15,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
