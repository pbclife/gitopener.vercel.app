import { HTMLAttributes } from 'react';

type TypoCompType = HTMLAttributes<HTMLDivElement> & {};

export default function TypoComp({ className, ...props }: TypoCompType) {
  // todo: implement theme system
  return <div className={` prose max-w-2xl ${className || ``}`} {...props} />;
}
