import Head from 'next/head';
// import { Inter } from 'next/font/google';
import type { FC } from 'react';
import { getChecklist } from '@/services/checklist';
import type { HomeProps } from '@/pages/home/Home.types';
import Home from './home';

// const inter = Inter({ subsets: ['latin'] });

const HomeRoot: FC<HomeProps> = (props) => {
  return (
    <>
      <Head>
        <title>Check List</title>
        <meta
          name={'viewport'}
          content={'width=device-width, initial-scale=1'}
        />
        <link rel={'icon'} href={'/favicon.ico'} />
      </Head>
      <main>
        <Home {...props} />
      </main>
    </>
  );
};

export default HomeRoot;

export const getServerSideProps = async () => {
  const checklist = await getChecklist();

  return {
    props: {
      checklist,
    },
  };
};
