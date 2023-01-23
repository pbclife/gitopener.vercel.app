import { clsx } from 'clsx';
import { FC, HTMLAttributes } from 'react';

type ContainerProps = HTMLAttributes<HTMLDivElement>;

const Container: FC<ContainerProps> = ({ className, ...props }) => {
  return (
    <div
      {...props}
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
    />
  );
};

export default Container;
