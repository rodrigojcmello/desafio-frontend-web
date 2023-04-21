import type { FC } from 'react';
import { InputText } from '@/pages/farm/new/components/InputText';
import { useForm } from 'react-hook-form';
import type { FarmFields, InputOptions } from '@/pages/farm/new/NewFarm.types';
import { setChecklist } from '@/services/checklist/checklist';
import { customAlphabet } from 'nanoid/async';

const fields: InputOptions[] = [
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

const NewFarm: FC = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<FarmFields>();
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onSubmit = async (data: FarmFields) => {
    const nanoid = customAlphabet('1234567890', 8);
    const id = await nanoid();

    const date = new Date();

    await setChecklist([
      {
        _id: `${id}`,
        created_at: date,
        updated_at: date,
        amount_of_milk_produced: Number(data.amount_of_milk_produced),
        farmer: {
          city: data.farmer_city,
          name: data.farmer_name,
        },
        from: {
          name: data.from_name,
        },
        had_supervision: data.had_supervision,
        location: {
          latitude: Number(data.location_latitude),
          longitude: Number(data.location_longitude),
        },
        number_of_cows_head: Number(data.number_of_cows_head),
        to: {
          name: data.to_name,
        },
        type: data.type,
      },
    ]);
  };

  console.log({ errors });

  return (
    <div>
      <h1>New farm</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => (
          <InputText
            key={field.id}
            id={field.id as keyof FarmFields}
            label={field.label}
            register={register}
            options={field.options}
            type={field.type}
            error={errors[field.id as keyof FarmFields]}
          />
        ))}
        <button type={'submit'}>submit</button>
      </form>
    </div>
  );
};

export default NewFarm;
