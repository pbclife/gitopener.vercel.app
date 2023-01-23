import CustomError from '&/errors/customError';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

export default function errorHandler(handle: NextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await handle(req, res);
    } catch (error) {
      // TODO: handle mongoose errors
      if (error instanceof CustomError) {
        res.status(error.statusCode).json({ message: error.message });
      } else if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else res.status(500).json({ message: `Something goes wrong` });
    }
  };
}
