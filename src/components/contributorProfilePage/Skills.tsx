import type { FC, ReactNode } from 'react';

type SkillsProps = {
  children: ReactNode;
};

const Skills: FC<SkillsProps> = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </>
  );
};

export default Skills;
