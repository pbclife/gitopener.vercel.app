import GithubIcon from '@/components/icons/socials/Github';
import type { SocialCard } from '@/types/client/SocialCards';
import type { FC } from 'react';
import Card from '../Card';

const GithubCard: FC<SocialCard> = ({
  activeHere = false,
  children,
  username,
  name,
  href,
}) => {
  return (
    <Card
      Icon={GithubIcon}
      href={href}
      title={name}
      subTitle={`@${username}`}
      isActive={activeHere}
    >
      {children}
    </Card>
  );
};

export default GithubCard;
