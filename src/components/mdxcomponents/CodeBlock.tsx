import beautify from '@/utils/beautify';
import { ClipboardIcon } from '@heroicons/react/24/outline';
import { FC, ReactNode, useEffect, useState } from 'react';

type CodeBlockProps = {
  children: ReactNode;
  fileName: string;
  toCopy: string;
};

const CodeBlock: FC<CodeBlockProps> = ({ children, fileName, toCopy }) => {
  const [text, setText] = useState<'copy' | 'copied'>(`copy`);

  function handleClick() {
    navigator.clipboard.writeText(toCopy);
    setText(`copied`);
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (text !== `copy`) setText(`copy`);
    }, 3000);

    return () => clearTimeout(timeOut);
  }, [text]);

  return (
    <div className="rounded-lg border border-slate-700 bg-slate-800 pt-2">
      <div className="-mx-px flex text-sm font-medium leading-6 text-accent">
        {fileName && (
          <div className="flex flex-none items-center border-t border-b border-accent border-t-transparent bg-slate-800 px-4 py-1">
            {beautify(fileName)}
          </div>
        )}
        <div className="flex flex-auto items-center rounded-t-md border border-slate-600 bg-slate-700/70">
          <div className="flex flex-auto items-center justify-end space-x-4 ">
            <button
              onClick={handleClick}
              className="group relative mx-4 my-1 text-slate-200 outline-none hover:text-white"
            >
              <ClipboardIcon className="h-6 w-6" />
              <div
                className={`absolute -top-full left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-accent px-3  py-0.5 font-medium capitalize text-white group-hover:block ${
                  text === 'copied' ? `block` : `hidden`
                }`}
              >
                {text}
                <span className="absolute inset-0 top-full left-1/2 -z-10 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-accent " />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`rounded-b-lg prose-code:border-none prose-code:bg-transparent prose-code:text-inherit prose-pre:px-2 `}
      >
        {children}
      </div>
    </div>
  );
};

export default CodeBlock;
