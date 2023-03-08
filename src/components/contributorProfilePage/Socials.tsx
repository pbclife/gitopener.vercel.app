import type { FC } from 'react';

import EarlyBirds from '@icons/EarlyBirds';
import GithubIcon from '@icons/Github';

type SocialsProps = {};

const Socials: FC<SocialsProps> = () => {
  return (
    <div className="absolute -top-11 right-4 flex h-14 w-fit items-center gap-x-4 text-skin-muted">
      <div className="rounded-full border border-skin-base bg-skin-base p-1.5">
        <GithubIcon className="h-6 w-6 sm:h-7 sm:w-7" />
      </div>
      <div className="rounded-full border border-skin-base bg-skin-base p-1.5">
        <EarlyBirds className="h-6 w-6 sm:h-7 sm:w-7" />
      </div>
    </div>
  );
};

export default Socials;
