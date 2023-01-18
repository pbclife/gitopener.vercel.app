import { ContributorsProps } from '@/pages/contributors';
import FresLeafIcon from '@icons/fresh-leaf';
import { FC } from 'react';
import Represent from '../layouts/represent';
import RenderContributors from './RenderContributors';

type Props = {
  contributors: ContributorsProps['newContributors'];
};

const NewContributrs: FC<Props> = ({ contributors }) => {
  return (
    <Represent
      about="Lorem ipsum dolor sit amet consectetur adipisicing elit. In modi aliquid sapiente dicta ab accusamus id."
      mainTitle="Fresh Contributors"
      topTitle="Welcome"
      TopIcon={FresLeafIcon}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <RenderContributors data={contributors} />
      </div>
    </Represent>
  );
};

export default NewContributrs;
