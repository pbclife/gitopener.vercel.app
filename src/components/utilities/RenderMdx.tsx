import GithubIcon from '@icons/github';
import IssueIcon from '@icons/issue';
import TypoComp from '@utilities/typo-component';
import type { FC } from 'react';
import type { TFileContent } from 'types/file';

type RenderMdxProps = {
  data: TFileContent;
};

const RenderMdx: FC<RenderMdxProps> = ({ data }) => {
  return (
    <div className=" group relative z-0 pb-6 sm:pl-6">
      <div className="absolute left-0 top-0 -z-10 hidden h-[110%] border-l border-accent sm:block" />
      <IssueIcon className="absolute inset-0 h-8 w-8 translate-y-[0.2rem] -translate-x-full text-accent sm:-translate-x-[0.95rem]" />
      <a
        href={data.meta.Edit as string}
        target="_blank"
        rel="noreferrer"
        className="absolute right-0 hidden w-fit cursor-pointer items-center gap-x-2 rounded-md bg-skin-inverted p-1 px-3 py-1 font-semibold capitalize text-skin-inverted no-underline  hover:bg-skin-inverted/90 group-hover:flex sm:mr-4 "
      >
        <GithubIcon className="h-5 w-5" /> Edit
      </a>
      <TypoComp
        className="
     !max-w-4xl 
     prose-h4:mb-4 prose-h4:-mt-1 prose-h4:w-fit prose-h4:rounded-full prose-h4:bg-accent/10 prose-h4:px-4 prose-h4:py-2 prose-h4:text-sm prose-h4:text-accent
     prose-p:my-2 prose-p:font-medium prose-p:text-skin-muted prose-a:border-b  
     prose-a:border-accent/50 prose-a:text-skin-base prose-a:no-underline hover:prose-a:border-accent
     prose-blockquote:border-accent prose-blockquote:bg-accent/10 
     prose-blockquote:p-3
     prose-blockquote:before:bg-accent prose-strong:text-skin-base
     prose-code:text-skin-base
     prose-pre:border
     prose-pre:border-skin-base prose-pre:bg-skin-base prose-pre:text-skin-muted
     prose-ol:text-accent prose-ul:text-skin-muted
     prose-li:text-skin-base prose-li:before:bg-accent xs:prose-blockquote:p-4
     "
      >
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </TypoComp>
    </div>
  );
};

export default RenderMdx;
