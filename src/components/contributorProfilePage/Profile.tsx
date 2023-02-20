import type { Contribution } from '@/types/client/Contributors';
import type { TContributor } from '@/types/server/Contributors';
import type { FC } from 'react';

import { BriefcaseIcon, MapPinIcon } from '@heroicons/react/24/outline';
import TypoComp from '@utilities/TypoComponent';
import ProfileImage from './ProfileImage';

export type ProfileProps = {
  contributor: Omit<TContributor, 'isDeleted'>;
  meta: Contribution['meta'];
};

const Profile: FC<ProfileProps> = ({ meta, contributor }) => {
  return (
    <div className="relative z-0 pb-12">
      <div className="bg-squares -mt-4"></div>
      {/* profile Image */}
      <div className="absolute inset-x-0 -top-16 w-fit rounded-full border-2 border-accent bg-skin-base p-0.5 sm:-top-20">
        <ProfileImage
          alt={contributor.gh_username}
          src={contributor.avatar_url}
        />
      </div>

      {/* top */}
      <TypoComp className="pt-20 sm:pt-24">
        {/* Name */} {/* occupation */}
        <h1>
          {meta.author}{' '}
          <span className="text-base font-semibold text-skin-muted">
            He | Him
          </span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          asperiores fuga molestiae autem esse velit.
        </p>
        <div className="not-prose flex flex-wrap items-center gap-x-6 gap-y-2 text-skin-muted xs:prose">
          {/* location */}
          <div className="flex items-center gap-x-2">
            <MapPinIcon className="h-6 w-6" />
            <p>{contributor.location}</p>
          </div>
          {/* twitter */}
          <div className="flex items-center gap-x-2">
            <BriefcaseIcon className="h-6 w-6" />
            <p>{meta.occupation}</p>
          </div>
        </div>
      </TypoComp>
    </div>
  );
};

export default Profile;
