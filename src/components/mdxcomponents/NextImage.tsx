import Image from 'next/image';
import type { FC } from 'react';

const NextImage: FC<{
  alt: string;
  src: string;
}> = ({ alt, src }) => {
  return (
    <Image
      alt={alt}
      src={src}
      width={1280}
      height={720}
      className="mb-16 aspect-video w-full rounded-md object-cover object-center"
    />
  );
};

export default NextImage;
