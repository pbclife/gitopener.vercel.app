import { FC, HTMLAttributes, ReactNode } from 'react';

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  styles?: string;
};

const Container: FC<ContainerProps> = ({
  children,
  className,
  styles,
  ...props
}) => {
  return (
    <section className={`w-full ${styles || ``} `}>
      <div {...props} className={`container mx-auto ${className || ``}`}>
        {children}
      </div>
    </section>
  );
};

export default Container;
