import type { FC } from 'react';
import type { HomeProps } from '@/flows/Farm/List/List.types';
import moment from 'moment';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { NewButton } from '@/flows/Farm/New/components/NewButton';
import Head from 'next/head';

const List: FC<HomeProps> = ({ checklist }) => {
  const title = 'Lista de Fazendas';

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header title={title} rightComponent={<NewButton />} />

      {checklist.map((farmer) => {
        return (
          // eslint-disable-next-line no-underscore-dangle
          <Link href={`/farm/view/${farmer._id}`} key={farmer._id}>
            <div>{farmer.from.name}</div>
            <div>{farmer.farmer.name}</div>
            <div>{farmer.farmer.city}</div>
            <div>
              {moment(farmer.created_at).format('DD/MM/YYYY')}{' '}
              {moment(farmer.created_at).fromNow()}
            </div>
            -----------------------
          </Link>
        );
      })}
    </div>
  );
};

export default List;
