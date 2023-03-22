import { ContributorsProps } from '@/pages/contributors';
import FresLeafIcon from '@icons/FreshLeaf';
import type { FC } from 'react';
import Represent from '../../layouts/represent';
import RenderContributors from './RenderContributors';

type Props = {
  contributors: ContributorsProps['newContributors'];
};

const NewContributrs: FC<Props> = ({ contributors }) => {
  return (
    <Represent
      about="Meet our Fresh Contributors - a group of talented individuals who are new to our community/organization and are eager to make a meaningful contribution."
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
