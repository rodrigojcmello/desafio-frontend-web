import type { FC } from 'react';
import { InputText } from '@/pages/farm/new/components/InputText';
import { useForm } from 'react-hook-form';
import type { FarmFields } from '@/pages/farm/new/NewFarm.types';
import { setNewFarm } from '@/services/checklist';
import { customAlphabet } from 'nanoid/async';
import { fields } from '@/pages/farm/new/NewFarm.validation';

const onSubmit = async (data: FarmFields) => {
  const nanoid = customAlphabet('1234567890', 8);
  const id = await nanoid();

  const date = new Date();

  await setNewFarm([
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

const NewFarm: FC = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<FarmFields>();

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
