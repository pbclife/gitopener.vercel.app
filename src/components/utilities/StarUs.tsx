import { StarIcon } from '@heroicons/react/24/solid';
import type { FC } from 'react';

const StarUs: FC = () => {
  return (
    <a
      href="https://github.com/pbclife/gitopener.vercel.app"
      target="_blank"
      rel="norefferer noreferrer"
      className="rounded-btn flex items-center justify-center gap-x-2 bg-skin-inverted font-semibold text-skin-inverted"
    >
      <StarIcon className="h-5 w-5" />
      Star Us
    </a>
  );
};

export default StarUs;
