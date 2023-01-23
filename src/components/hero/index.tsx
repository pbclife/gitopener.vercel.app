import type { FC } from 'react';
import LogoSection from './LogoSection';
import TextSection from './TextSection';

const Hero: FC = () => {
  return (
    <div className="flex w-full items-center justify-between pb-6">
      <TextSection />
      <LogoSection />
    </div>
  );
};
export default Hero;
