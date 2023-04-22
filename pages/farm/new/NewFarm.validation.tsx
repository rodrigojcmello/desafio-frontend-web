import type { InputOptions } from '@/pages/farm/new/NewFarm.types';

export const fields: InputOptions[] = [
  {
    id: 'amount_of_milk_produced',
    label: 'Quantidade de leite produzida no mês',
    type: 'number',
    validation: {
      required: 'A quantidade de leite produzida no mês é necessária',
    },
  },
  {
    id: 'farmer_name',
    label: 'Nome da fazenda',
    type: 'text',
    validation: { required: 'O nome da fazenda é necessário' },
  },
  {
    id: 'farmer_city',
    label: 'Cidade da fazenda',
    type: 'text',
    validation: { required: 'A cidade da fazenda é necessária' },
  },
  {
    id: 'from_name',
    label: 'Nome do fazendeiro',
    type: 'text',
    validation: { required: 'O nome do fazendeiro é necessário' },
  },
  {
    id: 'had_supervision',
    label: 'Supervisão no mês em curso',
    type: 'radio',
    validation: { required: 'Selecione se há supervisão ou não' },
    valueOptions: [
      { value: 'true', label: 'Sim' },
      { value: 'false', label: 'Não' },
    ],
  },
  {
    id: 'location',
    label: 'Geolocalização',
    type: 'text',
    validation: {
      required:
        'Latitude e longitude são necessárias, favor usar o mapa abaixo',
    },
  },
  {
    id: 'number_of_cows_head',
    label: 'Quantidade de cabeça de gado',
    type: 'number',
    validation: { required: 'A quantidade de cabeça de gado é necessária' },
  },
  {
    id: 'to_name',
    label: 'Nome do supervisor',
    type: 'text',
    validation: { required: 'O nome do supervisor é necessário' },
  },
  {
    id: 'type',
    label: 'Tipo',
    type: 'radio',
    validation: { required: 'Selecione um tipo' },
    valueOptions: [
      { value: 'BPA', label: 'BPA' },
      { value: 'Antibiótico', label: 'Antibiótico' },
      { value: 'BPF', label: 'BPF' },
    ],
  },
];
