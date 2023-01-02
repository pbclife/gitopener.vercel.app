import axios from 'config/axios';
import { GetStaticPropsContext } from 'next';
// type TFetchAllContributors = (limit: number) => Promise<TCont[]>;

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

export const fetchAllContributors = async (limit: number) => {
  console.log(limit);

  try {
    const { data } = await axios.get(
      `/contributors?select=avatar_url,gh_username,name,occupation,createdAt,_id&limit=${limit}`
    );
    return data;
  } catch (error) {
    throw new Error(`Something went wrong`);
  }
};

export const fetchSingleContributor = async ({
  params,
}: GetStaticPropsContext) => {
  try {
    const { data } = await axios.get(`/contributors/${params!.contId}`);
    return data;
  } catch (error) {
    throw new Error(`Something went wrong`);
  }
};

export const getDynamicPaths = async () => {
  const {
    data: { contributors },
  } = await axios.get('/contributors?select=gh_username');

  asserHasPropertyArray(contributors);
  return contributors.map((obj) => {
    return {
      params: {
        contId: obj.gh_username,
      },
    };
  });
};
