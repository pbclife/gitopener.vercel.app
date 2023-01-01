import { assertHasProps } from '&/validator/assertionGuards';
import axios from 'api/axios';
import { TCont } from 'types/contributors';
// type TFetchAllContributors = (limit: number) => Promise<TCont[]>;

export const fetchAllContributors = async (limit: number) => {
  console.log(limit);

  try {
    const { data } = await axios.get('/contributors');
    assertHasProps<TCont, keyof TCont>(data[0], [
      'avatar_url',
      'gh_username',
      'location',
      'name',
      'occupation',
    ]);
    return data;
  } catch (error) {
    throw new Error(`Something went wrong`);
  }
};
