import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';

type CodeProps = ComponentProps<'code'>;

const Code: FC<CodeProps> = ({ className, ...props }) => {
  return (
    <code
      className={clsx(
        `border-skin-base bg-skin-shine text-skin-base`,
        className
      )}
      {...props}
    />
  );
};

export default Code;
