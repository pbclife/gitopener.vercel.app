import AlertIcon from '@icons/Alert';
import type { FC, ReactNode } from 'react';

type AlertProps = {
  children: ReactNode;
};

const Alert: FC<AlertProps> = ({ children }) => {
  return (
    <div
      aria-label="Alert"
      className={`mb-4 overflow-hidden rounded-xl border border-amber-500/20 bg-amber-50/50 px-5 dark:border-amber-500/30 dark:bg-amber-500/10`}
    >
      <div className="flex gap-x-3 prose-p:text-sm prose-p:text-amber-900 prose-a:border-amber-500 prose-a:text-amber-600 dark:prose-p:text-amber-200">
        <span className="my-4">
          <AlertIcon className="h-7 w-7 text-amber-600 dark:text-amber-400/80" />
        </span>
        {children}
      </div>
    </div>
  );
};

export default Alert;
