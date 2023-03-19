import type { FC, ReactNode } from 'react';

type SkillsProps = {
  children: ReactNode;
  title?: string;
  desc?: string;
};

const Skills: FC<SkillsProps> = ({ children, title, desc }) => {
  return (
    <>
      {title && (
        <div className="prose my-4 mb-4 max-w-lg">
          <h3>{title}</h3>
          {desc && <p>{desc}</p>}
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </>
  );
};

export default Skills;
