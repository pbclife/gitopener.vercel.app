import QuoteIcon from '@icons/Quote';
import type { ComponentProps, FC } from 'react';

type BlockQuoteProps = ComponentProps<'blockquote'>;

const BlockQuote: FC<BlockQuoteProps> = ({ className, children, ...props }) => {
  return (
    <blockquote
      className={`mb-4 overflow-hidden border-sky-500/20 bg-sky-50/50 not-italic prose-p:before:hidden prose-p:after:hidden dark:border-sky-500/30 dark:bg-sky-500/10 ${
        className || ``
      }`}
      {...props}
    >
      <div className="flex gap-x-3 prose-p:text-sm prose-p:font-normal prose-p:text-sky-900 prose-a:border-sky-500 prose-a:text-sky-600 dark:prose-p:text-sky-200">
        <span className="my-4">
          <QuoteIcon className="h-7 w-7 text-sky-600 dark:text-sky-400/80" />
        </span>
        {children}
      </div>
    </blockquote>
  );
};

export default BlockQuote;
