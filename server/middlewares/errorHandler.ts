import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

export default function errorHandler(handle: NextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await handle(req, res);
    } catch (error) {
      //Todo: handle errors
      console.log(error);
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else res.status(500).json({ message: `Something goes wrong` });
    }
  };
}
