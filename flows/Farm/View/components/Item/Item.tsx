/* eslint-disable no-underscore-dangle */
import type { FC } from 'react';
import moment from 'moment/moment';
import { ItemStyle } from '@/flows/Farm/View/components/Item/Item.style';
import type { ItemProps } from '@/flows/Farm/View/components/Item';
import 'moment/locale/pt-br';

moment.locale('pt-br');
export const Item: FC<ItemProps> = ({ farmer }) => {
  return (
    <ItemStyle>
      <li>
        <div className={'item__title'}>Fazendeiro / Proprietário</div>
        <div className={'item__info'}>{farmer.from.name}</div>
      </li>
      <li>
        <div className={'item__title'}>Nome da fazenda</div>
        <div className={'item__info'}>{farmer.farmer.name}</div>
      </li>
      <li>
        <div className={'item__title'}>Cidade de fazenda</div>
        <div className={'item__info'}>{farmer.farmer.city}</div>
      </li>
      <li>
        <div className={'item__title'}>Criado em</div>
        <div className={'item__info'}>
          {moment(farmer.created_at).format('DD/MM/YYYY')} -{' '}
          {moment(farmer.created_at).fromNow()}
        </div>
      </li>
      <li>
        <div className={'item__title'}>
          Quantidade de leite produzida no mês
        </div>
        <div className={'item__info'}>{farmer.amount_of_milk_produced}</div>
      </li>
      <li>
        <div className={'item__title'}>Tem supervisor?</div>
        <div className={'item__info'}>
          {farmer.had_supervision ? 'Sim' : 'Não'}
        </div>
      </li>
      <li>
        <div className={'item__title'}>Geolocalização</div>
        <div className={'item__info'}>
          {`${farmer.location.latitude}, ${farmer.location.longitude}`}
        </div>
      </li>
      <li>
        <div className={'item__title'}>Quantidade de cabeça de gado</div>
        <div className={'item__info'}>{farmer.number_of_cows_head}</div>
      </li>
      <li>
        <div className={'item__title'}>Supervisor</div>
        <div className={'item__info'}>{farmer.to.name}</div>
      </li>
      <li>
        <div className={'item__title'}>Tipo</div>
        <div className={'item__info'}>{farmer.type}</div>
      </li>
      <li>
        <div className={'item__title'}>Atualizado em</div>
        <div className={'item__info'}>
          {moment(farmer.updated_at).format('DD/MM/YYYY')} -{' '}
          {moment(farmer.updated_at).fromNow()}
        </div>
      </li>
    </ItemStyle>
  );
};
