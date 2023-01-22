import TypoComp from '@utilities/TypoComponent';
import type { FC } from 'react';

const Slogun: FC = () => {
  const year = new Date().getFullYear();
  return (
    <div className="">
      <TypoComp className="prose-headings:my-0 prose-h1:italic prose-p:my-2 prose-p:text-skin-muted/80">
        <h2>On your mark, Get Set,</h2>
        <h1>Open Source</h1>
        <p>© {year} PBC Life. All rights reserved </p>
      </TypoComp>
    </div>
  );
};

export default Slogun;
