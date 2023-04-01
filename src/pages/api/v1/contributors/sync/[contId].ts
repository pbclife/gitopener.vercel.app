import { syncWithGithub } from '@/server/controllers/contributors';
import connectDB from '@/server/db/connectDB';
import { NextApiHandler } from 'next';

// end-point: origin/api/v1/contributors/sync/:contId
const handler: NextApiHandler = async (req, res) => {
  console.log('Hii');

  const { method } = req;
  if (method === 'PATCH') {
    // handle post request
    return syncWithGithub(req, res);
  } else {
    // error no supported method
    res.status(405).json({ message: `method is not supported` });
  }
};

export default connectDB(handler);
