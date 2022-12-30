import { getAllContributors } from '&/controllers/contributors';
import connectDB from '&/db/connectDB';
import { NextApiHandler } from 'next';

// routes
const handler: NextApiHandler = async (req, res) => {
  const { method } = req;

  if (method === 'GET') {
    // handle get request
    return getAllContributors(req, res);
  } else if (method === 'POST') {
    // handle post request
  } else {
    // error no supported method
    res.status(422).json({ message: `method is not supported` });
  }
};

export default connectDB(handler);
