import BulbIcon from '@icons/Bulb';
import type { FC, ReactNode } from 'react';

type TipProps = {
  children: ReactNode;
};

const Tip: FC<TipProps> = ({ children }) => {
  return (
    <div
      aria-label="Tip"
      className={`mb-4 overflow-hidden rounded-xl border border-teal-500/20 bg-teal-50/50 px-5  dark:border-teal-500/30 dark:bg-teal-500/10`}
    >
      <div className="flex gap-x-3 prose-p:text-sm prose-p:text-teal-900 prose-a:border-teal-500 prose-a:text-teal-600 dark:prose-p:text-teal-200">
        <span className="my-4">
          <BulbIcon className="h-7 w-7 text-teal-600 dark:text-teal-400/80" />
        </span>
        {children}
      </div>
    </div>
  );
};

export default Tip;
