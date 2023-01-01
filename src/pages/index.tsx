import Layout from '@/layouts/main';
import { FC } from 'react';

type HomeProps = {};

const Home: FC<HomeProps> = () => {
  return (
    <Layout>
      <main
        className={`grid min-h-screen place-items-center text-7xl font-extrabold tracking-tight text-indigo-600`}
      >
        PBC LIFE
      </main>
    </Layout>
  );
};

export default Home;
