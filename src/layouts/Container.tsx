import { clsx } from 'clsx';
import type { ComponentProps, FC } from 'react';

type ContainerProps = ComponentProps<'div'>;

const Container: FC<ContainerProps> = ({ className, ...props }) => {
  return (
    <div
      {...props}
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
    />
  );
};

export default Container;
