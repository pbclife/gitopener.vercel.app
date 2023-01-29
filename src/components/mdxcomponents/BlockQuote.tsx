import { LightBulbIcon } from '@heroicons/react/24/solid';
import type { ComponentProps, FC } from 'react';

type BlockQuoteProps = ComponentProps<'blockquote'>;

const BlockQuote: FC<BlockQuoteProps> = ({ className, children, ...props }) => {
  return (
    <blockquote
      className={`-ml-[1.75em] rounded-md border border-accent bg-accent/10 p-4 prose-p:text-base prose-p:font-medium prose-p:not-italic prose-p:before:hidden prose-p:after:hidden prose-a:text-accent ${
        className || ``
      }`}
      {...props}
    >
      <span className="my-0 flex items-center gap-x-2 text-xl font-semibold not-italic text-accent">
        <LightBulbIcon className="h-6 w-6 " />
        Note
      </span>
      {children}
    </blockquote>
  );
};

export default BlockQuote;
