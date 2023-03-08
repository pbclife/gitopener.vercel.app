import Dot from '@utilities/Dot';
import LinkComp from '@utilities/LinkComp';
import { FC, ReactNode } from 'react';

type SkillProps = {
  children?: ReactNode;
  name: string;
  level?: string;
  icon?: ReactNode | string;
  href?: string;
};

const Skill: FC<SkillProps> = ({ children, name, level, icon, href }) => {
  let isImageLink = false;

  if (typeof icon === 'string') {
    if (icon.startsWith('http://') || icon.startsWith('https://'))
      isImageLink = true;
  }

  return (
    <LinkComp isCardComp href={href ?? ``}>
      <div className="relative h-fit w-full rounded-lg border border-skin-base p-4">
        {children}
        <div className="not-prose flex items-end gap-x-2 text-skin-base">
          {icon ? (
            isImageLink ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={icon as string}
                alt={name}
                className="h-7 w-7 rounded-full object-cover object-center"
              />
            ) : (
              <div className="h-7 w-7 fill-current text-accent">{icon}</div>
            )
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
    </LinkComp>
  );
};

export default Skill;
