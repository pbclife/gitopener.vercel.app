import ForkIcon from '../icons/fork';
import GithubIcon from '../icons/github';

const HeroLinks = [
  {
    id: 1,
    Icon: ForkIcon,
    title: `Create a copy`,
    href: `https://github.com/pbclife/pbclife/fork`,
  },
  {
    id: 2,
    Icon: GithubIcon,
    title: `Github repository`,
    href: `https://github.com/pbclife/pbclife`,
  },
];

export default function Links() {
  return (
    <div className="flex flex-wrap-reverse items-center gap-y-4 gap-x-4 font-semibold text-skin-base sm:gap-x-6">
      {HeroLinks.map((link) => (
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
}
