/* eslint-disable no-underscore-dangle */
import type { FC } from 'react';
import type { HomeProps } from '@/flows/Farm/List/List.types';
import { Header } from '@/components/Header';
import { NewButton } from '@/flows/Farm/New/components/NewButton';
import Head from 'next/head';
import { Item } from '@/flows/Farm/List/components/Item';

const List: FC<HomeProps> = ({ checklist }) => {
  const title = 'Lista de Fazendas';

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header title={title} rightComponent={<NewButton />} />
      {checklist ? (
        <Item checklist={checklist} />
      ) : (
        <div>Houve um erro na requisição</div>
      )}
    </div>
  );
};

export default List;
