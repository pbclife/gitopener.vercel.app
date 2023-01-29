import GitOpenerIcon from '@/components/icons/GitOpener';
import type { FC } from 'react';

type LogoProps = {
  normal?: boolean;
  small?: boolean;
};

const Logo: FC<LogoProps> = ({ normal = false, small = false }) => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const content = (
    <>
      <GitOpenerIcon className={` ${small ? `h-6 w-6` : `h-8 w-8`}`} />
      <span
        className={`font-bold tracking-tight ${small ? `text-xl` : `text-2xl`}`}
      >
        Git Opener
      </span>
    </>
  );

  if (normal) {
    return <div className="flex items-center space-x-1">{content}</div>;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="flex items-center space-x-1 border-none py-4 text-skin-base outline-none"
    >
      {content}
    </button>
  );
};
export default Logo;
