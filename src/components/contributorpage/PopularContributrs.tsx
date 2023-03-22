import { ContributorsProps } from '@/pages/contributors';
import StarManIcon from '@icons/StarMan';
import type { FC } from 'react';
import Represent from '../../layouts/represent';
import RenderContributors from './RenderContributors';

type Props = {
  contributors: ContributorsProps['popularContributors'];
};

const PopularContributrs: FC<Props> = ({ contributors }) => {
  return (
    <Represent
      about="Say hello to our Popular Contributors - a group of talented and influential individuals who have made a significant impact on our community/organization. "
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
