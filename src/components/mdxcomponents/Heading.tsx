import type { ComponentProps, FC } from 'react';

type HeadingProps = {
  H1: FC<ComponentProps<'h1'>>;
  H2: FC<ComponentProps<'h2'>>;
  H3: FC<ComponentProps<'h3'>>;
  H4: FC<ComponentProps<'h4'>>;
};

const Heading: HeadingProps = {
  H1: ({ className, ...props }) => {
    return (
      <h1
        className={`text-6xl font-extrabold capitalize text-skin-base ${
          className || ``
        }`}
        {...props}
      />
    );
  },
  H2: ({ className, ...props }) => {
    return (
      <h2
        className={`text-4xl font-bold capitalize text-skin-base ${
          className || ``
        }`}
        {...props}
      />
    );
  },
  H3: ({ className, ...props }) => {
    return (
      <h3
        className={`text-2xl font-bold capitalize text-skin-base ${
          className || ``
        }`}
        {...props}
      />
    );
  },
  H4: ({ className, ...props }) => {
    return (
      <h4
        className={`text-lg font-semibold capitalize text-accent ${
          className || ``
        }`}
        {...props}
      />
    );
  },
};

export default Heading;
