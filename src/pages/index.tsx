import useProgressBar from '@/hooks/useProgressBar';
import Layout from '@layouts/main';
import Link from 'next/link';
import { FC } from 'react';

type HomeProps = {};

const Home: FC<HomeProps> = () => {
  useProgressBar(`#a3e635`);

  return (
    <Layout>
      <main
        className={`grid min-h-screen place-items-center text-7xl font-extrabold tracking-tight text-indigo-600`}
      >
        PBC LIFE
        <Link href={`/contributors`}>Contributors</Link>
      </main>
    </Layout>
  );
};

export default Home;
