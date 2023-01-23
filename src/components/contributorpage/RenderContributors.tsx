import { ContributorsProps } from '@/pages/contributors';
import Link from 'next/link';
import type { FC } from 'react';
import ContributorComp from './ContributorComp';

type Props = {
  data:
    | ContributorsProps['newContributors']
    | ContributorsProps['oldContributors'];
};

const RenderContributors: FC<Props> = ({ data }) => {
  return (
    <>
      {data.map((cont, index) => (
        <Link key={cont._id} href={`/contributors/${cont.gh_username}`}>
          <ContributorComp {...cont} glow={index === 0}>
            <p>{cont.name}</p>
          </ContributorComp>
        </Link>
      ))}
    </>
  );
};

export default RenderContributors;
