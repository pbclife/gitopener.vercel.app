import { ContributorsProps } from '@/pages/contributors';
import EarlyBirdsIcon from '@icons/early-birds';
import { FC } from 'react';
import Represent from '../layouts/represent';
import RenderContributors from './RenderContributors';

type Props = {
  contributors: ContributorsProps['oldContributors'];
};

const OldContributrs: FC<Props> = ({ contributors }) => {
  return (
    <Represent
      about="Lorem ipsum dolor sit amet consectetur adipisicing elit. In modi aliquid sapiente dicta ab accusamus id."
      mainTitle="Our Early Birds"
      topTitle="Had Contributed First"
      TopIcon={EarlyBirdsIcon}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <RenderContributors data={contributors} />
      </div>
    </Represent>
  );
};

export default OldContributrs;
