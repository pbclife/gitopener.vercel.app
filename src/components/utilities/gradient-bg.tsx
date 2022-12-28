import { ComponentProps } from 'react';

export type GradientBGType = ComponentProps<'div'> & {
  colors: [string, string, string, string];
};
export default function GradientBG({
  colors,
  className,
  ...props
}: GradientBGType) {
  return (
    <div
      className={className}
      style={{
        background: `linear-gradient(-45deg,${colors[0]},${colors[1]},${colors[2]},${colors[3]})`,
        backgroundSize: '400% 400%',
      }}
      {...props}
    />
  );
}
