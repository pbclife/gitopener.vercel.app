import Layout from '@layouts/main';
import { FC } from 'react';

type HomeProps = {};

const Home: FC<HomeProps> = () => {
  return (
    <Layout>
      <main className={`min-h-screen bg-skin-base`}></main>
    </Layout>
  );
};

export default Home;
