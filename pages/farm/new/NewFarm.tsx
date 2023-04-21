import type { FC } from 'react';
import { InputText } from '@/pages/farm/new/components/InputText';
import { useForm } from 'react-hook-form';
import type { FarmFields, InputOptions } from '@/pages/farm/new/NewFarm.types';

const fields: InputOptions[] = [
  {
    id: 'amount_of_milk_produced',
    label: 'A mount of milk produced',
    type: 'number',
    options: { required: 'A mount of milk produced is required' },
  },
  {
    id: 'farmer_name',
    label: 'Farmer name',
    type: 'text',
    options: { required: 'Farmer name is required' },
  },
  {
    id: 'farmer_city',
    label: 'Farmer city',
    type: 'text',
    options: { required: 'Farmer city is required' },
  },
  {
    id: 'from_name',
    label: 'From name',
    type: 'text',
    options: { required: 'From name is required' },
  },
  {
    id: 'had_supervision',
    label: 'Had supervision',
    type: 'checkbox',
  },
  {
    id: 'location_latitude',
    label: 'Latitude',
    type: 'number',
    options: { required: 'Latitude is required' },
  },
  {
    id: 'location_longitude',
    label: 'Longitude',
    type: 'number',
    options: { required: 'Longitude is required' },
  },
  {
    id: 'number_of_cows_head',
    label: 'Number of cows head',
    type: 'number',
    options: { required: 'Number of cows head is required' },
  },
  {
    id: 'to_name',
    label: 'To name',
    type: 'text',
    options: { required: 'To name is required' },
  },
  {
    id: 'type',
    label: 'Type',
    type: 'text',
    options: { required: 'Type is required' },
  },
];

const NewFarm: FC = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<FarmFields>();
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onSubmit = (data: any) => {
    console.log('data', data);
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
