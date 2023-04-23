/* eslint-disable no-underscore-dangle */
import Link from 'next/link';
import type { FC } from 'react';
import moment from 'moment/moment';
import { ItemStyle } from '@/flows/Farm/List/components/Item/Item.style';
import type { ItemProps } from '@/flows/Farm/List/components/Item';
import 'moment/locale/pt-br';

moment.locale('pt-br');
export const Item: FC<ItemProps> = ({ checklist }) => {
  return (
    <ItemStyle>
      {checklist.map((farmer) => {
        return (
          <li key={farmer._id}>
            <Link
              className={'item__link'}
              href={`/farm/view/${farmer._id}`}
              key={farmer._id}
            >
              <div className={'item__title'}>{farmer.farmer.name}</div>
              <div className={'item__info'}>{farmer.from.name}</div>
              <div className={'item__info'}>{farmer.farmer.city}</div>
              <div className={'item__from_now'}>
                <span>
                  {moment(farmer.created_at).format('DD/MM/YYYY')} -{' '}
                  <span className={'item__from_now'}>
                    {moment(farmer.created_at).fromNow()}
                  </span>
                </span>
              </div>
            </Link>
          </li>
        );
      })}
    </ItemStyle>
  );
};
