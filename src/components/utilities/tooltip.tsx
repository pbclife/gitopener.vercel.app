import { ComponentProps, FC } from 'react';

type ToolTipProps = ComponentProps<'div'> & {
  tip: string;
};

const ToolTip: FC<ToolTipProps> = ({ tip, ...props }) => {
  return (
    <div className="group relative z-10">
      <div {...props} />
      <span className="absolute left-1/2 -top-12 hidden h-fit w-fit -translate-x-1/2 whitespace-nowrap rounded-md bg-skin-inverted px-4 py-1 text-sm font-medium text-skin-inverted transition-all duration-200 ease-in-out group-hover:block">
        {tip}

        <span className="absolute left-1/2 -bottom-1 -z-10 h-4 w-4 -translate-x-1/2 rotate-45 rounded bg-skin-inverted"></span>
      </span>
    </div>
  );
};

export default ToolTip;
