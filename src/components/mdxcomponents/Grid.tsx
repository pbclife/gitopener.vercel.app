import type { FC, ReactNode } from 'react';

type GridProps = {
  children: ReactNode;
};

const Grid: FC<GridProps> = ({ children }) => {
  return (
    <div
      className={` prose grid grid-cols-1 gap-4 prose-a:border-b-0 md:grid-cols-2 `}
    >
      {children}
    </div>
  );
};

export default Grid;
