import type { ComponentProps, FC } from 'react';

type AnchorProps = ComponentProps<'a'>;

const Anchor: FC<AnchorProps> = ({ className, ...props }) => {
  return <a className={`text-inherit ${className || ``}`} {...props} />;
};

export default Anchor;
