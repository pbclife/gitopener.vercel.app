import { ContributorsProps } from '@/pages/contributors';
import Link from 'next/link';
import { FC } from 'react';
import ContributorComp from './ContributorComp';

type Props = {
  data:
    | ContributorsProps['newContributors']
    | ContributorsProps['oldContributors'];
};

const RenderContributors: FC<Props> = ({ data }) => {
  return (
    <>
      {data.map((cont) => (
        <Link key={cont._id} href={`/contributors/${cont.gh_username}`}>
          <ContributorComp {...cont}>
            <p>{cont.name}</p>
          </ContributorComp>
        </Link>
      ))}
    </>
  );
};

export default RenderContributors;
