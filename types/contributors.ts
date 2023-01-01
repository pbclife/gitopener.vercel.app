export type TContributor = {
  ghid: number;
  gh_username: string;
  name: string;
  email: string;
  avatar_url: string;
  html_url: string;
  location: string;
  occupation: string;
  bio: string;
  content: string;
  profile_views: number;
  isDeleted: boolean;
};

export type TCont = Pick<
  TContributor,
  'avatar_url' | 'gh_username' | 'occupation' | 'location' | 'name'
>;
