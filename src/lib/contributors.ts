import axios from '@/config/axios';
import { getMdxContent } from '@/lib/mdx/getMdxContent';
import octokit from '@/server/config/octokit';
import type { Contribution } from '@/types/client/Contributors';
import { TCont, TContributor } from '@/types/server/Contributors';
import { promises as fs } from 'fs';
import matter from 'gray-matter';
import path from 'path';
import withHobbyLi from './mdx/rehype/withHobbyLi';
import { assertHasContributionProps } from './utils';

const fileDir = path.join(process.cwd() + '/contribution');

function asserHasPropertyArray(
  value: unknown
): asserts value is Record<'gh_username', string>[] {
  if (!value || !Array.isArray(value)) {
    throw new Error(`No data found`);
  }
  for (const val of value) {
    if (!('gh_username' in val)) {
      throw new Error(`Missing keyword gh_username`);
    }
  }
}

export const fetchAllContributors = async (
  queryString: string
): Promise<{ count: number; contributors: (TCont & { _id: string })[] }> => {
  try {
    const { data } = await axios.get(queryString);
    return data;
  } catch (error) {
    throw new Error(`Something went wrong`);
  }
};

export const fetchNewContributors = async (
  limit: number
): Promise<ReturnType<typeof fetchAllContributors>> => {
  const queryString = `/contributors?select=avatar_url,gh_username,name,occupation,bio,createdAt,_id,createdAt&limit=${limit}&sort=-createdAt`;
  return await fetchAllContributors(queryString);
};

export const fetchOldContributors = async (
  limit: number
): Promise<ReturnType<typeof fetchAllContributors>> => {
  const queryString = `/contributors?select=avatar_url,gh_username,name,occupation,bio,createdAt,_id,createdAt&limit=${limit}&sort=createdAt`;
  return await fetchAllContributors(queryString);
};

export const fetchPopularContributors = async (
  limit: number
): Promise<ReturnType<typeof fetchAllContributors>> => {
  const queryString = `/contributors?select=avatar_url,gh_username,name,occupation,bio,createdAt,_id,followers,createdAt&limit=${limit}&sort=-followers`;
  return await fetchAllContributors(queryString);
};

export const fetchSingleContributor = async (
  meta: Contribution['meta']
): Promise<TContributor> => {
  const username = meta.github_username;
  // searching for the user if user is not found then create user
  try {
    const { data } = await axios.get(`/contributors/${username}`);
    return data;
    // if not found
  } catch (error) {
    // fetching github user
    const { data: gh_user } = await octokit.request('GET /users/{username}', {
      username,
    });
    // creating payload for new contributor
    const contPayload: Omit<
      TContributor,
      'isDeleted' | 'profile_views' | 'createdAt'
    > = {
      avatar_url: gh_user.avatar_url,
      bio: gh_user.bio,
      email: gh_user.email,
      gh_username: gh_user.login,
      ghid: gh_user.id,
      html_url: gh_user.html_url,
      name: meta.author,
      occupation: meta.occupation,
      location: gh_user.location,
      followers: gh_user.followers,
      following: gh_user.following,
    };

    const { data } = await axios.post(`/contributors`, contPayload);
    return data;
  }
};

export const getContribution = async (
  contId: string
): Promise<Contribution> => {
  const file = await fs.readFile(path.join(fileDir + `/${contId}.mdx`), 'utf8');
  const { data, content } = matter(file);
  assertHasContributionProps(data);
  const source = await getMdxContent(content, withHobbyLi);
  return {
    source,
    meta: data,
  };
};

export const getDynamicPaths = async () => {
  const {
    data: { contributors },
  } = await axios.get('/contributors?select=gh_username&limit=1');

  asserHasPropertyArray(contributors);
  return contributors.map((obj) => {
    return {
      params: {
        contId: obj.gh_username,
      },
    };
  });
};
