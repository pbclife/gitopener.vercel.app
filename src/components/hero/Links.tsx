import HeroLinks from '@/data/HeroLinks';
import type { FC } from 'react';
const replaceData = ['Create a Copy', 'Go to Repository'];

const HLinks = HeroLinks.map((link, indx) => {
  return {
    ...link,
    title: replaceData[indx],
  };
});

const Links: FC = () => {
  return (
    <div className="flex flex-wrap-reverse items-center gap-y-4 gap-x-4 font-semibold text-skin-base sm:gap-x-6">
      {HLinks.map((link) => (
        <a
          href={link.href}
          target="_blank"
          rel="norefferer noreferrer"
          key={link.id}
          className="flex items-center gap-1 capitalize"
        >
          <link.Icon className="h-7 w-7 " />
          <span>{link.title}</span>
        </a>
      ))}
    </div>
  );
};
export default Links;
