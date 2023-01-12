import { ComponentProps } from 'react';

type TypoCompType = ComponentProps<'div'>;

export default function TypoComp({ className, ...props }: TypoCompType) {
  return (
    <div
      className={` prose max-w-2xl prose-headings:text-skin-base prose-p:font-medium prose-p:text-skin-muted ${
        className || ``
      }`}
      {...props}
    />
  );
}
