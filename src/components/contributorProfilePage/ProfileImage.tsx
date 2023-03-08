import clsx from 'clsx';
import Image from 'next/image';
import type { FC } from 'react';

type ProfileImageProps = {
  alt: string;
  src: string;
  className?: string;
};

const ProfileImage: FC<ProfileImageProps> = ({ alt, src, className }) => {
  return (
    <Image
      alt={alt}
      src={src}
      width={256}
      height={256}
      className={clsx(
        'h-24 w-24 rounded-full object-cover object-center sm:h-32 sm:w-32',
        className
      )}
    />
  );
};

export default ProfileImage;
