import type { ComponentProps, FC } from 'react';

type AnchorProps = ComponentProps<'a'>;

const Anchor: FC<AnchorProps> = ({ className, ...props }) => {
  return (
    <a className={`border-accent text-inherit ${className || ``}`} {...props} />
  );
};

export default Anchor;
