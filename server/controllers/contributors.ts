import errorHandler from '&/middlewares/errorHandler';
import Contributor from '&/models/contributors';
import { NextApiHandler } from 'next';

export const getAllContributors: NextApiHandler = errorHandler(
  async (req, res) => {
    const users = await Contributor.find({});
    res.status(200).json(users);
  }
);
