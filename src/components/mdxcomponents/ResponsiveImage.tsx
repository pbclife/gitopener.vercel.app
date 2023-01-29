import Image from 'next/image';
import type { FC } from 'react';

const ResponsiveImg: FC<{
  alt: string;
  src: string;
  width: number;
  height: number;
}> = ({ alt, src, height, width }) => {
  return (
    <Image
      alt={alt}
      src={src}
      width={width}
      height={height}
      className="mb-16 h-64 w-full rounded-md object-cover object-center"
    />
  );
};

export default ResponsiveImg;
