import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import type { FarmFields } from '@/flows/Farm/New/NewFarm.types';
import { fields } from '@/flows/Farm/New/NewFarm.validation';
import { InputText } from '@/components/InputText';
import { getOneFarmByID, updateFarmByID } from '@/services/checklist';
import type { GetServerSideProps } from 'next';
import type { EditProps } from '@/flows/Farm/Edit/EditFarm.types';

const EditFarm: FC<EditProps> = ({ id, farmer }) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<FarmFields>();

  const inputFilled = {
    amount_of_milk_produced: farmer.amount_of_milk_produced,
    farmer_city: farmer.farmer.city,
    farmer_name: farmer.farmer.name,
    from_name: farmer.from.name,
    had_supervision: farmer.had_supervision,
    location: `${farmer.location.latitude}, ${farmer.location.longitude}`,
    number_of_cows_head: farmer.number_of_cows_head,
    to_name: farmer.to.name,
    type: farmer.type,
  };

  console.log({ fields, farmer });

  const onSubmit = async (data: FarmFields) => {
    const [lat, lng] = data.location.split(', ');

    await updateFarmByID(id, {
      created_at: farmer.created_at,
      updated_at: new Date(),
      amount_of_milk_produced: Number(data.amount_of_milk_produced),
      farmer: {
        city: data.farmer_city,
        name: data.farmer_name,
      },
      from: {
        name: data.from_name,
      },
      had_supervision: data.had_supervision === 'true',
      location: {
        latitude: Number(lat),
        longitude: Number(lng),
      },
      number_of_cows_head: Number(data.number_of_cows_head),
      to: {
        name: data.to_name,
      },
      type: data.type,
    });
  };

  return (
    <div>
      <h1>Edit farm</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => (
          <InputText
            defaultValue={inputFilled[field.id as keyof FarmFields]}
            key={field.id}
            id={field.id as keyof FarmFields}
            label={field.label}
            register={register}
            validation={field.validation}
            type={field.type}
            error={errors[field.id as keyof FarmFields]}
          />
        ))}
        <button type={'submit'}>submit</button>
      </form>
    </div>
  );
};

export default EditFarm;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const farmer = await getOneFarmByID(id as string);

  return {
    props: {
      id,
      farmer,
    },
  };
};
