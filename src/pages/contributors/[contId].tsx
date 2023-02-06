import type { TContributor } from '@/types/server/Contributors';
import type { GetStaticPaths, GetStaticProps } from 'next';
import type { FC } from 'react';

import ContributorProfilePageLayout from '@/layouts/ContributorProfilePageLayout';
import {
  fetchSingleContributor,
  getContribution,
  getDynamicPaths,
} from '@/lib/contributors';

import mdxComponents from '@/components/mdxcomponents';
import TypoComp from '@/components/utilities/TypoComponent';
import { Contribution } from '@/types/client/Contributors';
import { MDXRemote } from 'next-mdx-remote';

type SingleContributorProps = {
  contributor: Omit<TContributor, 'isDeleted'> & {
    createdAt?: Date;
  };
  contribution: Contribution;
};

const SingleContributor: FC<SingleContributorProps> = ({
  contributor,
  contribution,
}) => {
  return (
    <ContributorProfilePageLayout
      meta={contribution.meta}
      contributor={contributor}
    >
      <TypoComp className="max-w-full">
        <MDXRemote {...contribution.source} components={mdxComponents} />
      </TypoComp>
    </ContributorProfilePageLayout>
  );
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
    const contributor = await fetchSingleContributor(contribution.meta);

    return {
      props: {
        contributor,
        contribution,
      },
      revalidate: 15,
    };
  } catch (error) {
    console.log(error);

    return {
      notFound: true,
    };
  }
};
