import Head from 'next/head';
// import { Inter } from 'next/font/google';
import type { FC } from 'react';
import { getAllFarms } from '@/services/checklist';
import type { HomeProps } from '@/pages/farm/list/List.types';
import List from './farm/list';

// const inter = Inter({ subsets: ['latin'] });

const Home: FC<HomeProps> = (props) => {
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
        <List {...props} />
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const checklist = await getAllFarms();

  return {
    props: {
      checklist,
    },
  };
};
