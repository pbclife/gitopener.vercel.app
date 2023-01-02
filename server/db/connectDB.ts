import mongoose, { CallbackError } from 'mongoose';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGO_URI environment variable inside .env.local'
  );
}

// @ts-ignore
let cached = global.mongoose;

if (!cached) {
  // @ts-ignore
  cached = global.mongoose = { conn: null, promise: null };
}

export default function connectDB<T>(handler: NextApiHandler<T>) {
  return async (req: NextApiRequest, res: NextApiResponse<T>) => {
    if (cached.conn) {
      console.log(`I'm here all is ok`);
      return handler(req, res);
    }

    if (!cached.promise) {
      const opts = {
        bufferCommands: false,
      };

      cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
        return mongoose;
      });
    }
    try {
      cached.conn = await cached.promise;
      console.log(`connected to DB`);
      return handler(req, res);
    } catch (error) {
      console.log((error as CallbackError)?.message);
    }
  };
}
