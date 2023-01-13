import axios from 'axios';

const url =
  process.env.NODE_ENV === `production`
    ? `https://gitopener.vercel.app/api/v1`
    : `http://localhost:3000/api/v1`;

export default axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
});
