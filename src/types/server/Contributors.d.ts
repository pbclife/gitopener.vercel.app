import ContV from '&validation/contributor.validation';
import { z } from 'zod';

export type TContributor = z.infer<typeof ContV>;
export type TCont = Pick<
  TContributor,
  | 'avatar_url'
  | 'gh_username'
  | 'name'
  | 'bio'
  | 'occupation'
  | 'createdAt'
  | 'followers'
>;
