import type { FC } from 'react';
import type { HomeProps } from '@/pages/farm/list/List.types';
import moment from 'moment';
import Link from 'next/link';

const List: FC<HomeProps> = ({ checklist }) => {
  // console.log('checklist', checklist);

  return (
    <div>
      <div>
        <h1>Farmers</h1>
        <Link href={`/farm/new`}>add farmer</Link>
      </div>

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
