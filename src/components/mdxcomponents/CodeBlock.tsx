import { ClipboardIcon } from '@heroicons/react/24/outline';
import { FC, ReactNode, useEffect, useState } from 'react';

type CodeBlockProps = {
  children: ReactNode;
  fileName: string;
};

const CodeBlock: FC<CodeBlockProps> = ({ children, fileName }) => {
  console.log(fileName);

  const [text, setText] = useState<string>(`copy`);

  function handleClick() {
    setText(`copied`);
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (text !== `copy`) setText(`copy`);
    }, 3000);

    return () => clearTimeout(timeOut);
  }, [text]);

  return (
    <span className="flex flex-col ">
      <div className="rounded-t-lg rounded-b-none bg-slate-800 py-2">
        <div className="flex min-h-[2rem] w-full items-center justify-end border-y border-slate-600 bg-slate-700 py-1 px-4">
          <button
            onClick={handleClick}
            className="group relative text-slate-200 outline-none hover:text-white"
          >
            <ClipboardIcon className="h-6 w-6" />
            <div className="absolute -top-full left-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-lg bg-accent  px-3 py-0.5 font-medium text-white group-hover:block">
              {text}
              <span className="absolute inset-0 top-full left-1/2 -z-10 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-accent " />
            </div>
          </button>
        </div>
      </div>
      <div
        className={`relative m-0 overflow-auto rounded-t-none rounded-b-lg bg-slate-800 p-0 prose-code:border-none prose-code:bg-transparent prose-code:text-inherit `}
      >
        {children}
      </div>
    </span>
  );
};

export default CodeBlock;
