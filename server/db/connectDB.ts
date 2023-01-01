import mongoose, { CallbackError } from 'mongoose';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const mongUri = process.env?.MONGO_URI || ``;
export default function connectDB<T>(handler: NextApiHandler<T>) {
  return async (req: NextApiRequest, res: NextApiResponse<T>) => {
    try {
      if (mongoose.connections[0].readyState) return handler(req, res);
      mongoose.set('strictQuery', false);
      await mongoose.connect(mongUri);
      console.log(`connected to DB`);
      return handler(req, res);
    } catch (error) {
      console.log((error as CallbackError)?.message);
    }
  };
}
