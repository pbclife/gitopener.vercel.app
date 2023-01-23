import {
  deleteContributor,
  getSingleContributor,
  updateContributor,
} from '@/server/controllers/contributors';
import connectDB from '@/server/db/connectDB';
import { NextApiHandler } from 'next';

// end-point: origin/api/v1/contributors
const handler: NextApiHandler = async (req, res) => {
  const { method } = req;
  if (method === ('GET' as 'GET')) {
    // handle get request
    return getSingleContributor(req, res);
  } else if (method === 'PATCH') {
    // handle post request
    return updateContributor(req, res);
  } else if (method === 'DELETE') {
    return deleteContributor(req, res);
  } else {
    // error no supported method
    res.status(405).json({ message: `method is not supported` });
  }
};

export default connectDB(handler);
