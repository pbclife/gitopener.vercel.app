import { ComponentProps } from 'react';
import colors from 'tailwindcss/colors';
import GradientBG from './GradientBg';

type UnderlineType = ComponentProps<'span'>;
export default function Underline({
  className,
  children,
  ...props
}: UnderlineType) {
  return (
    <span className={`relative pb-1 ${className || ``}`} {...props}>
      {children}
      <GradientBG
        colors={[
          colors.cyan[500],
          colors.blue[600],
          colors.pink[400],
          colors.yellow[400],
        ]}
        className="pointer-events-none absolute inset-x-0 top-full h-1 w-full animate-bg-shift rounded-full"
      />
    </span>
  );
}
