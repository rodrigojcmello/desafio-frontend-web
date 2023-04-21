import type { InputOptions } from '@/pages/farm/new/NewFarm.types';

export const fields: InputOptions[] = [
  {
    id: 'amount_of_milk_produced',
    label: 'Quantidade de leite produzida no mês',
    type: 'number',
    options: {
      required: 'A quantidade de leite produzida no mês é necessária',
    },
  },
  {
    id: 'farmer_name',
    label: 'Nome da fazenda',
    type: 'text',
    options: { required: 'O nome da fazenda é necessário' },
  },
  {
    id: 'farmer_city',
    label: 'Cidade da fazenda',
    type: 'text',
    options: { required: 'A cidade da fazenda é necessária' },
  },
  {
    id: 'from_name',
    label: 'Nome do fazendeiro',
    type: 'text',
    options: { required: 'O nome do fazendeiro é necessário' },
  },
  {
    id: 'had_supervision',
    label: 'Supervisão no mês em curso',
    type: 'checkbox',
  },
  {
    id: 'location_latitude',
    label: 'Latitude',
    type: 'number',
    options: {
      required: 'Latitude e longitude são necessárias, use o mapa abaixo',
    },
  },
  {
    id: 'location_longitude',
    label: 'Longitude',
    type: 'number',
    options: {
      required: 'Latitude e longitude são necessárias, use o mapa abaixo',
    },
  },
  {
    id: 'number_of_cows_head',
    label: 'Quantidade de cabeça de gado',
    type: 'number',
    options: { required: 'A quantidade de cabeça de gado é necessária' },
  },
  {
    id: 'to_name',
    label: 'Nome do supervisor',
    type: 'text',
    options: { required: 'O nome do supervisor é necessário' },
  },
  {
    id: 'type',
    label: 'Tipo',
    type: 'text',
    options: { required: 'O tipo é necessário' },
  },
];
