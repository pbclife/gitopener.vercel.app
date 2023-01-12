import type { TCont } from '&validation/contributor.validation';
import { fetchAllContributors } from 'lib/contributors';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';

export type ContributorsProps = {
  count: number;
  contributors: (TCont & { _id: string })[];
};

const Contributors: FC<ContributorsProps> = ({ contributors }) => {
  const conts = contributors.map((cont) => (
    <Link key={cont._id} href={`/contributors/${cont.gh_username}`}>
      <div className="">
        <p>{cont.name}</p>
      </div>
    </Link>
  ));
  return <>{conts}</>;
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
