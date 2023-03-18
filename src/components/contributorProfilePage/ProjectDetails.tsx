import { ChevronRightIcon } from '@heroicons/react/20/solid';
import RepoIcon from '@icons/Repo';
import type { FC, ReactElement } from 'react';

type ProjectDetailsProps = {
  className: string;
  children: ReactElement;
};

const ProjectDetails: FC<ProjectDetailsProps> = ({ children }) => {
  const content = children.props.children;
  const { name, tldr, livePreview, repository } = children.props;
  return (
    <div className="text-skin-base">
      <div className="space-y-4">
        {tldr && <strong className="!text-accent">{tldr}</strong>}
        <h1 className="mb-8 break-words text-5xl font-extrabold tracking-tight sm:text-6xl">
          {name}
        </h1>
        {content}
        <div className="flex items-center gap-4 pt-4">
          {repository && (
            <a
              href={repository}
              target="_blank"
              rel="norefferer noreferrer"
              className="flex cursor-pointer items-center gap-x-1 rounded-md border-none bg-skin-inverted px-3 py-1 font-medium capitalize text-skin-inverted"
            >
              <RepoIcon className="h-5 w-5" /> Repository
            </a>
          )}
          {livePreview && (
            <a
              href={livePreview}
              target="_blank"
              rel="norefferer noreferrer"
              className="flex cursor-pointer items-center gap-x-1 rounded-md border border-skin-base bg-skin-base px-4 py-1 font-medium capitalize text-skin-base "
            >
              Live Preview <ChevronRightIcon className="-mr-2 h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
