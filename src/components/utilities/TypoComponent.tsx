import type { ComponentProps, FC } from 'react';

type TypoCompType = ComponentProps<'div'>;

const TypoComp: FC<TypoCompType> = ({ className, ...props }) => {
  return (
    <div
      className={` prose max-w-2xl prose-headings:text-skin-base prose-p:font-medium prose-p:text-skin-muted ${
        className || ``
      }`}
      {...props}
    />
  );
};

export default TypoComp;
