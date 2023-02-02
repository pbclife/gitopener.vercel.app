import type { SocialCard } from '@/types/client/SocialCards';
import LinkedInIcon from '@icons/LinkedIn';
import type { FC } from 'react';
import Card from '../Card';

const LinkedInCard: FC<SocialCard> = ({
  activeHere = false,
  children,
  username,
  name,
  href,
}) => {
  return (
    <Card
      Icon={LinkedInIcon}
      href={href}
      title={name}
      subTitle={`@${username}`}
      isActive={activeHere}
    >
      {children}
    </Card>
  );
};

export default LinkedInCard;
