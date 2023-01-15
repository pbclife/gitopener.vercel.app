import { ContributorsProps } from '@/pages/contributors';
import StarManIcon from '@icons/star-man';
import { FC } from 'react';
import Represent from '../layouts/represent';
import RenderContributors from './RenderContributors';

type Props = {
  contributors: ContributorsProps['popularContributors'];
};

const PopularContributrs: FC<Props> = ({ contributors }) => {
  return (
    <Represent
      about="Lorem ipsum dolor sit amet consectetur adipisicing elit. In modi aliquid sapiente dicta ab accusamus id."
      mainTitle="Popular Contributors"
      topTitle="Star Men"
      TopIcon={StarManIcon}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <RenderContributors data={contributors} />
      </div>
    </Represent>
  );
};

export default PopularContributrs;
