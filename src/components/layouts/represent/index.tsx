import TypoComp from '@utilities/typo-component';
import { ComponentProps, FC } from 'react';

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
    <section className="relative space-y-4 py-2">
      {/* typo */}
      <TypoComp className=" prose-base prose-h1:my-0 prose-h4:text-accent prose-p:leading-6 sm:prose-lg sm:prose-p:leading-7">
        <h4 className={`flex items-center gap-2`}>
          {TopIcon && <TopIcon className="h-7 w-7" />}
          <span>{topTitle}</span>
        </h4>
        <h1>{mainTitle}</h1>

        <p>{about}</p>
      </TypoComp>
      {/* body */}
      <div {...props} />
    </section>
  );
};

export default Represent;
