import type { CheckList } from '@/services/checklist/types';

export const checklistMock: CheckList = [
  {
    _id: '77_777_275',
    type: 'Antibiótico',
    amount_of_milk_produced: 200,
    farmer: {
      name: 'Marianos',
      city: 'São Paulo',
    },
    from: {
      name: 'Mariano Silva',
    },
    to: {
      name: 'Thiago Moraes',
    },
    number_of_cows_head: 25,
    had_supervision: true,
    location: {
      latitude: -23.5,
      longitude: -46.6,
    },
    created_at: '2023-04-15T04:54:33.000Z' as unknown as Date,
    updated_at: '2023-04-15T04:54:33.000Z' as unknown as Date,
  },
  {
    _id: '20_386_748',
    type: 'Antibiótico',
    amount_of_milk_produced: 27,
    farmer: {
      city: 'Campos do Jordão',
      name: 'Fazenoda do Paulo',
    },
    from: {
      name: 'João Paulo',
    },
    to: {
      name: 'Leonardo',
    },
    number_of_cows_head: 2,
    had_supervision: false,
    location: {
      latitude: -23.5,
      longitude: -46.6,
    },
    created_at: '2023-04-16T15:04:48.000Z' as unknown as Date,
    updated_at: '2023-04-23T20:16:11.431Z' as unknown as Date,
    __v: 0,
  },
];
