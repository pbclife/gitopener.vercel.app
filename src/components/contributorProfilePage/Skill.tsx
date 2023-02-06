import Dot from '@utilities/Dot';
import type { FC, ReactNode } from 'react';

type SkillProps = {
  children?: ReactNode;
  name: string;
  level?: string;
  icon?: ReactNode;
  logoRef?: string;
  href?: string;
};

const Skill: FC<SkillProps> = ({ children, name, level, icon, logoRef }) => {
  return (
    <div className="relative h-fit w-full rounded-lg border border-skin-base p-4">
      {children}
      <div className="not-prose flex items-end gap-x-2 text-skin-base">
        {icon ? (
          <div className="h-7 w-7 fill-current text-accent">{icon}</div>
        ) : logoRef ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logoRef}
            alt={name}
            className="h-7 w-7 rounded-full object-cover object-center"
          />
        ) : null}
        <h3 className="mt-2 flex items-center gap-x-2 text-xl font-semibold">
          {name}
          {level && (
            <>
              <Dot />
              <span className="text-xs font-medium text-skin-muted">
                {level}
              </span>
            </>
          )}
        </h3>
      </div>
    </div>
  );
};

export default Skill;
