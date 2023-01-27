import type { ComponentProps, FC } from 'react';

type CodeProps = ComponentProps<'code'>;

const Code: FC<CodeProps> = ({ className, ...props }) => {
  return (
    <code
      className={`rounded-md border border-skin-base bg-skin-shine px-2 py-1 font-medium text-skin-base before:hidden after:hidden ${
        className || ``
      }`}
      {...props}
    />
  );
};

export default Code;
