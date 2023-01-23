import axios from '@/config/axios';
import octokit from '@/server/config/octokit';
import { TCont, TContributor } from '@/types/server/Contributors';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';
import { unified } from 'unified';

export type Contribution = {
  content: string;
  meta: {
    [key: string]: string | number;
  };
};

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
  contId: string,
  contribution: Contribution
): Promise<Omit<TContributor, 'isDeleted'>> => {
  // authentication & automatically throws error if no file found
  const file = fs.readFileSync(path.join(fileDir + `/${contId}.mdx`), 'utf8');
  const contFile = matter(file);
  const userName = contFile.data.github_username;
  // searching for the user if user is not found then create user
  try {
    const {
      // eslint-disable-next-line no-unused-vars
      data: { isDeleted, ...contributor },
    } = await axios.get(`/contributors/${userName}`);

    return contributor;
    // if not found
  } catch (error) {
    // fetching github user
    const { data: gh_user } = await octokit.request('GET /users/{username}', {
      username: userName,
    });
    // creating payload for new contributor
    const contPayload: Omit<
      TContributor,
      'isDeleted' | 'profile_views' | 'createdAt'
    > = {
      avatar_url: gh_user.avatar_url,
      bio: gh_user.bio,
      content: contribution.content,
      email: gh_user.email,
      gh_username: gh_user.login,
      ghid: gh_user.id,
      html_url: gh_user.html_url,
      name: contribution.meta.author as string,
      occupation: contribution.meta.occupation as string,
      location: gh_user.location,
      followers: gh_user.followers,
      following: gh_user.following,
    };

    const {
      // eslint-disable-next-line no-unused-vars
      data: { isDeleted, ...contributor },
    } = await axios.post(`/contributors`, contPayload);
    return contributor;
  }
};

export const getContribution = async (
  contId: string
): Promise<Contribution> => {
  const file = fs.readFileSync(path.join(fileDir + `/${contId}.mdx`), 'utf8');

  const matterResult = matter(file);
  const content = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkHtml)
    .process(matterResult.content);

  return {
    content: content.value as string,
    meta: matterResult.data,
  };
};

export const getDynamicPaths = async () => {
  const {
    data: { contributors },
  } = await axios.get('/contributors?select=gh_username&limit=5');

  asserHasPropertyArray(contributors);
  return contributors.map((obj) => {
    return {
      params: {
        contId: obj.gh_username,
      },
    };
  });
};
