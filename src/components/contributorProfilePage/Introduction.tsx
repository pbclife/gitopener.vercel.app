import type { FC, ReactNode } from 'react';

type IntroductionProps = {
  children: ReactNode;
};

const Introduction: FC<IntroductionProps> = ({ children }) => {
  return (
    <div className="">
      <h1>Introduction</h1>
      {children}
    </div>
  );
};

export default Introduction;
