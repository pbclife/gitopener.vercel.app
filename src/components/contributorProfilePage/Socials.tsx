import { ComponentProps, FC, ReactNode, useState } from 'react';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { EllipsisVerticalIcon, WifiIcon } from '@heroicons/react/24/solid';
import DevPostIcon from '@icons/socials/Devpost';
import DiscordIcon from '@icons/socials/Discord';
import DribbleIcon from '@icons/socials/Dribble';
import GithubIcon from '@icons/socials/Github';
import HashnodeIcon from '@icons/socials/Hashnode';
import InstagramIcon from '@icons/socials/Instagram';
import LinkedInIcon from '@icons/socials/LinkedIn';
import MediumIcon from '@icons/socials/Medium';
import TwitterIcon from '@icons/socials/Twitter';
import YoutubeIcon from '@icons/socials/Youtube';
import { ProfileProps } from './Profile';

type SocialsProps = {
  meta: ProfileProps['meta'];
};

interface ISocialLink {
  title: string;
  icon: FC<ComponentProps<'svg'>>;
}

const Socials: FC<SocialsProps> = ({ meta }) => {
  const [isMoreSocialOpen, setIsMoreSocialOpen] = useState<boolean>(false);

  function toggleIsMoreSocialOpen() {
    setIsMoreSocialOpen(!isMoreSocialOpen);
  }

  const allowedSocials: Array<ISocialLink> = [
    { title: 'github', icon: GithubIcon },
    { title: 'twitter', icon: TwitterIcon },
    { title: 'linkedin', icon: LinkedInIcon },
    { title: 'portfolio_website', icon: WifiIcon },
    { title: 'devpost', icon: DevPostIcon },
    { title: 'discord', icon: DiscordIcon },
    { title: 'medium', icon: MediumIcon },
    { title: 'hashnode', icon: HashnodeIcon },
    { title: 'youtube', icon: YoutubeIcon },
    { title: 'instagram', icon: InstagramIcon },
    { title: 'dribble', icon: DribbleIcon },
  ];
  const socialLinks = arrangeSocialLinks(meta, allowedSocials);

  return (
    <div className="absolute -top-11 right-4 flex h-14 w-fit items-center gap-x-4 text-skin-muted">
      {socialLinks.featuredLinks.map((social) => (
        <SocialLinks to={social.to} key={social.title}>
          <social.icon className="social-icon" />
        </SocialLinks>
      ))}

      {socialLinks.otherLinks.length > 0 && (
        <div className="relative">
          <button
            onClick={toggleIsMoreSocialOpen}
            className=" rounded-full border border-skin-base bg-skin-base p-1.5"
          >
            {isMoreSocialOpen ? (
              <XMarkIcon className="social-icon" />
            ) : (
              <EllipsisVerticalIcon className="social-icon" />
            )}
          </button>
          {isMoreSocialOpen && (
            <div className="absolute right-0 top-full flex translate-y-4 flex-col rounded-md border border-skin-base bg-skin-base ">
              {socialLinks.otherLinks.map((social) => (
                <a
                  key={social.title}
                  href={social.to}
                  onClick={toggleIsMoreSocialOpen}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-4 p-4 text-skin-base hover:bg-skin-shine"
                >
                  <social.icon className="social-icon" />{' '}
                  <p className="font-medium capitalize ">
                    {social.title.split('_').join(' ')}
                  </p>
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Socials;

function SocialLinks({ children, to }: { children: ReactNode; to: string }) {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-skin-base bg-skin-base p-1.5"
    >
      {children}
    </a>
  );
}

function arrangeSocialLinks(
  social: Record<string, string | number | undefined>,
  allowedSocials: Array<ISocialLink>
): {
  count: number;
  featuredLinks: Array<ISocialLink & { to: string }>;
  otherLinks: Array<ISocialLink & { to: string }>;
} {
  let count = 0;
  const featuredLinks: Array<ISocialLink & { to: string }> = [];
  const otherLinks: Array<ISocialLink & { to: string }> = [];

  Object.keys(social).forEach((link) => {
    if (allowedSocials.map((l) => l.title).includes(link)) {
      const tLink = allowedSocials.find(
        (l) => l.title === link
      ) as ISocialLink & { to: string };

      if (tLink) {
        tLink.to = social[link] as string;
        if (featuredLinks.length < 3) featuredLinks.push(tLink);
        else otherLinks.push(tLink);
      }
      count++;
    }
  });

  return {
    count,
    featuredLinks,
    otherLinks,
  };
}
