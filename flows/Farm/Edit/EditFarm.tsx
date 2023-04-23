import { getOneFarmByID } from '@/services/checklist';
import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const farmer = await getOneFarmByID(id as string);

  return {
    props: {
      id,
      farmer,
    },
  };
};
