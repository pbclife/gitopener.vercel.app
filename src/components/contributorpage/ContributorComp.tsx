import type { TCont } from '&validation/contributor.validation';
import { getFormattedDate } from 'lib/date';
import Image from 'next/image';
import { ComponentProps, FC } from 'react';

type ContributorProps = TCont & ComponentProps<'div'>;

const ContributorComp: FC<ContributorProps> = ({
  avatar_url,
  bio,
  gh_username,
  name,
  occupation,
  createdAt,
  className,
  ...props
}) => {
  const contributedIn = getFormattedDate(createdAt);

  return (
    <div
      className={`group relative mx-auto h-fit w-full divide-y divide-skin-base rounded-md border border-skin-base bg-skin-base p-4 text-skin-base transition-colors duration-200 ease-in-out hover:bg-skin-shine sm:max-w-md sm:p-6 ${
        className || ``
      }`}
      {...props}
    >
      {/* head */}
      <div className={`flex items-center gap-x-4 ${bio && `pb-4`}`}>
        {/* profile picture */}
        <Image
          alt={gh_username}
          src={avatar_url}
          width={144}
          height={144}
          className="h-12 w-12 rounded-full object-cover object-center"
        />
        {/* info */}
        <div className="">
          {/* name */}
          <strong className="text-lg capitalize transition-colors duration-200 ease-in-out group-hover:text-accent ">
            {name}
          </strong>
          {/* occupation */}
          <p className="text-sm font-medium text-skin-muted transition-colors duration-200 ease-in-out group-hover:text-skin-base ">
            {occupation}
          </p>
        </div>
      </div>
      {/* bio */}
      {bio && <p className="py-2 font-medium ">{bio}</p>}
      {/* contribution date */}
      <div className="absolute right-2 top-1 border-none text-xs capitalize text-skin-base/30">
        {contributedIn}
      </div>
    </div>
  );
};

export default ContributorComp;
