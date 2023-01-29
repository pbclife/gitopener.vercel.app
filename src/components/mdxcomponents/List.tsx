import type { ComponentProps, FC } from 'react';

type ListProps = ComponentProps<'li'>;

const List: FC<ListProps> = ({ className, ...props }) => {
  return (
    <li
      className={`text-skin-muted marker:text-accent before:bg-accent prose-code:text-skin-base ${
        className || ``
      }`}
      {...props}
    />
  );
};

export default List;
