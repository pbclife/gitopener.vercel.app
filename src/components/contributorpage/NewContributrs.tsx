import { ContributorsProps } from '@/pages/contributors';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { FC } from 'react';
import Represent from '../layouts/represent';
import ContributorComp from './ContributorComp';

type NewContributorsProps = Pick<ContributorsProps, 'contributors'>;

const NewContributrs: FC<NewContributorsProps> = ({ contributors }) => {
  const conts = contributors.map((cont) => (
    <Link key={cont._id} href={`/contributors/${cont.gh_username}`}>
      <ContributorComp {...cont}>
        <p>{cont.name}</p>
      </ContributorComp>
    </Link>
  ));
  return (
    <Represent
      about="Lorem ipsum dolor sit amet consectetur adipisicing elit. In modi aliquid sapiente dicta ab accusamus id."
      mainTitle="Fresh Contributors"
      topTitle="Welcome"
      TopIcon={SparklesIcon}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {conts}
      </div>
    </Represent>
  );
};

export default NewContributrs;
