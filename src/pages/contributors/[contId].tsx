import { fetchSingleContributor, getDynamicPaths } from 'lib/contributors';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { TCont } from 'types/contributors';

type SingleContributorProps = {
  contributor: TCont & {
    createdAt: Date;
  };
};

const SingleContributor: FC<SingleContributorProps> = ({ contributor }) => {
  const router = useRouter();
  const { contId } = router.query;
  console.log(contributor);
  return <>single contributor {contId} </>;
};

export default SingleContributor;

export const getStaticPaths: GetStaticPaths<{ contId: string }> = async () => {
  const paths = await getDynamicPaths();

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<SingleContributorProps> = async (
  context
) => {
  try {
    const contributor = await fetchSingleContributor(context);
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
