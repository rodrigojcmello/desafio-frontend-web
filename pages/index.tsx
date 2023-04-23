import Head from 'next/head';
import type { FC } from 'react';
import { getAllFarms } from '@/services/checklist';
import type { HomeProps } from '@/flows/Farm/List/List.types';
import List from '@/flows/Farm/List/List';

const Home: FC<HomeProps> = (props) => {
  return (
    <>
      <Head>
        <title>Check List</title>
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
