import { CircleStackIcon } from '@heroicons/react/24/outline';
import type { Dispatch, FC, ReactElement, SetStateAction } from 'react';
import Project from './Project';

type ProjectListProps = {
  children: ReactElement[];
  inFocus: number;
  onSelect: Dispatch<SetStateAction<number>>;
};

const ProjectList: FC<ProjectListProps> = ({ children, onSelect, inFocus }) => {
  return (
    <ul className="not-prose m-0 max-w-lg space-y-2 rounded-xl border border-skin-base/60 bg-skin-base p-4 text-skin-base">
      <div className="flex flex-wrap gap-x-2 px-4 py-2 font-medium capitalize">
        <CircleStackIcon className="h-6 w-6" />
        Projects that beautifies my portfolio
      </div>
      <div className="max-h-44 overflow-auto">
        {children.map((child: ReactElement, i: number) => (
          <li key={i} onClick={() => onSelect(i)}>
            <Project
              name={child?.props?.name ?? 'Project'}
              livePreview={child?.props?.livePreview}
              tldr={child?.props?.tldr}
              isActive={i === inFocus}
            />
          </li>
        ))}
      </div>
    </ul>
  );
};

export default ProjectList;
