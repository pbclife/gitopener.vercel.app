import type { Contribution } from '@/types/client/Contributors';
import type { TContributor } from '@/types/server/Contributors';
import { FC, useEffect, useState } from 'react';

import axios from '@/config/axios';
import {
  ArrowPathIcon,
  BriefcaseIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import ToolTip from '@utilities/Tooltip';
import TypoComp from '@utilities/TypoComponent';
import { useRouter } from 'next/router';
import ProfileImage from './ProfileImage';

export type ProfileProps = {
  contributor: Omit<TContributor, 'isDeleted'>;
  meta: Contribution['meta'];
};

const Profile: FC<ProfileProps> = ({ meta, contributor }) => {
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [isSyncActive, setIsSyncActive] = useState<boolean>(false);
  const router = useRouter();
  const { contId } = router.query;

  useEffect(() => {
    async function fetchContributor() {
      try {
        const { data: contributor } = await axios.get(
          `/contributors/${contId}`
        );
        const lastSynced = new Date(contributor.updatedAt);
        const currentTime = new Date(Date.now());
        const timegap = Math.abs(currentTime.getTime() - lastSynced.getTime());
        const diffDay = Math.floor(timegap / 1000 / 60 / 60 / 24);
        if (diffDay > 2) setIsSyncActive(true);
      } catch (error) {
        console.log(error);
        setIsSyncActive(false);
      }
    }
    fetchContributor();
  }, [contId]);

  async function syncWithGithub() {
    setIsSyncing(true);
    try {
      await axios.patch(`/contributors/sync/${contId}`);
      setIsSyncActive(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSyncing(false);
    }
  }

  // JSX
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
        <div className="flex h-fit gap-x-4">
          <h1>
            {meta.author}{' '}
            {meta.pronouns && (
              <span className="text-base font-semibold text-skin-muted">
                {meta.pronouns}
              </span>
            )}
          </h1>
          {/* sync button */}
          <ToolTip tip="Sync with Github">
            <button
              disabled={!isSyncActive || isSyncing}
              onClick={syncWithGithub}
              className={`rounded-full p-2 transition-all duration-150 ease-in-out hover:bg-skin-shine ${
                isSyncActive
                  ? 'text-skin-base hover:text-accent'
                  : 'text-skin-muted/50'
              } ${isSyncing && `animate-spin`}`}
            >
              <ArrowPathIcon className={`h-6 w-6`} />
            </button>
          </ToolTip>
        </div>
        <p>{contributor.bio ? contributor.bio : `${meta.author}'s bio`}</p>
        <div className="not-prose flex flex-wrap items-center gap-x-6 gap-y-2 text-skin-muted xs:prose">
          {/* location */}
          {contributor.location && (
            <div className="flex items-center gap-x-2">
              <MapPinIcon className="h-6 w-6" />
              <p>{contributor.location}</p>
            </div>
          )}
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
