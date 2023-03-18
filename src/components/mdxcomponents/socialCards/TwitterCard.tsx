import TwitterIcon from '@/components/icons/socials/Twitter';
import type { SocialCard } from '@/types/client/SocialCards';
import type { FC } from 'react';
import Card from '../Card';

const TwitterCard: FC<SocialCard> = ({
  activeHere = false,
  children,
  username,
  name,
  href,
}) => {
  return (
    <Card
      Icon={TwitterIcon}
      href={href}
      title={name}
      subTitle={`@${username}`}
      isActive={activeHere}
    >
      {children}
    </Card>
  );
};

export default TwitterCard;
