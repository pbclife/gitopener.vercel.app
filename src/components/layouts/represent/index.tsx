import TypoComp from '@utilities/TypoComponent';
import type { ComponentProps, FC } from 'react';

type RepresentProps = ComponentProps<'div'> & {
  topTitle: string;
  TopIcon?: FC<ComponentProps<'svg'>>;
  mainTitle: string;
  about: string;
};

const Represent: FC<RepresentProps> = ({
  TopIcon,
  topTitle,
  mainTitle,
  about,
  ...props
}) => {
  return (
    <section className="relative z-0 space-y-4 py-2">
      <div className="pointer-events-none absolute inset-y-0 left-4 -z-10 hidden translate-y-10 border-l border-accent xs:block" />

      {/* typo */}
      <TypoComp className=" prose-base prose-h1:my-0 prose-h4:text-accent prose-p:leading-6 sm:prose-lg sm:prose-p:leading-7">
        <h4 className={`flex items-center gap-2`}>
          {TopIcon && (
            <TopIcon className="h-8 w-8 rounded-full border border-accent bg-accent p-1 !text-white" />
          )}
          <span>{topTitle}</span>
        </h4>
        <div className="pl-0 xs:pl-9 sm:pl-10">
          <h1>{mainTitle}</h1>

          <p>{about}</p>
        </div>
      </TypoComp>
      {/* body */}
      <div {...props} />
    </section>
  );
};

export default Represent;
