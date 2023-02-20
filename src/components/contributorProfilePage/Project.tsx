import { ChevronRightIcon, WindowIcon } from '@heroicons/react/20/solid';
import type { FC, ReactNode } from 'react';

type ProjectProps = {
  icon?: string | ReactNode;
  name: string;
  livePreview?: string;
  tldr?: string;
  isActive: boolean;
  forkLink?: string;
};

const Project: FC<ProjectProps> = ({ name, livePreview, tldr }) => {
  return (
    <div className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-skin-muted hover:bg-skin-shine dark:hover:bg-skin-shine/60">
      {/* icon section */}
      <div className="flex items-center space-x-4">
        <div className="rounded-full border border-accent/50 p-2">
          <WindowIcon className="h-6 w-6" />
        </div>
        {/* name & tldr */}
        <div className="">
          <h3 className="text-lg font-semibold text-skin-base">{name}</h3>
          <p className="text-xs">
            {(livePreview && livePreview.replace('https://', '')) ?? tldr}
          </p>
        </div>
      </div>
      {/* chevron */}
      <ChevronRightIcon className="h-5 w-5" />
    </div>
  );
};

export default Project;
