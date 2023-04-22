import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import type { FarmFields, EditProps } from '@/pages/farm/new/NewFarm.types';
import { customAlphabet } from 'nanoid/async';
import { fields } from '@/pages/farm/new/NewFarm.validation';
import { InputText } from '@/components/InputText';
import { Map } from '@/pages/farm/view/components/Map';
import dynamic from 'next/dynamic';
import type { Position } from '@/pages/farm/new/components/LocationMarker';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { setNewFarm, updateFarmByID } from '@/services/checklist';

const LocationMarker = dynamic(
  () => import('./components/LocationMarker').then((mod) => mod.LocationMarker),
  {
    ssr: false,
  }
);

const NewFarm: FC<EditProps> = ({ id, farmer }) => {
  // eslint-disable-next-line unicorn/no-null
  const [location, setLocation] = useState<Position>(null);
  const router = useRouter();

  const isNew = router.pathname === '/farm/new' && !id;

  const {
    formState: { errors },
    register,
    handleSubmit,
    setValue,
  } = useForm<FarmFields>();

  const inputFilled = {
    amount_of_milk_produced: farmer?.amount_of_milk_produced,
    farmer_city: farmer?.farmer.city,
    farmer_name: farmer?.farmer.name,
    from_name: farmer?.from.name,
    had_supervision: farmer?.had_supervision,
    number_of_cows_head: farmer?.number_of_cows_head,
    to_name: farmer?.to.name,
    type: farmer?.type,
    location: location?.lat ? `${location?.lat}, ${location?.lng}` : undefined,
  };

  useEffect(() => {
    if (location?.lat) {
      setValue('location', `${location?.lat}, ${location?.lng}`);
    }
  }, [location]);

  useEffect(() => {
    if (farmer?.type) {
      setValue('type', farmer.type);
    }
  }, [farmer?.type]);

  useEffect(() => {
    if (farmer?.had_supervision) {
      setValue(
        'had_supervision',
        `${farmer.had_supervision ? 'true' : 'false'}`
      );
    }
  }, [farmer?.had_supervision]);

  const onSubmit = async (data: FarmFields) => {
    const nanoid = customAlphabet('1234567890', 8);
    const newId = await nanoid();

    const date = new Date();

    const [lat, lng] = data.location.split(', ');

    console.log({ data });

    const payload = {
      ...(isNew ? { _id: `${newId}` } : undefined),
      created_at: isNew ? date : farmer?.created_at!,
      updated_at: date,
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
    };

    await (isNew ? setNewFarm([payload]) : updateFarmByID(id!, payload));

    const alertMessage = isNew ? 'Fazenda cadastrada!' : 'Fazenda editada!';
    alert(alertMessage);
    router.push('/');
  };

  const title = isNew ? 'Nova Fazenda' : 'Editar Fazenda';

  return (
    <div>
      <h1>{title}</h1>
      <form autoComplete={'off'} onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => (
          <InputText
            key={field.id}
            defaultValue={inputFilled[field.id as keyof FarmFields]}
            id={field.id as keyof FarmFields}
            label={field.label}
            register={register}
            validation={field.validation}
            type={field.type}
            error={errors[field.id as keyof FarmFields]}
            valueOptions={field.valueOptions}
          />
        ))}
        <button type={'submit'}>submit</button>
      </form>
      <Map
        width={800}
        height={400}
        // Bovcontrol geolocation
        center={{ lat: 36.815_586_9, lng: -119.739_342_4 }}
        zoom={15}
      >
        {({ TileLayer, Marker, Popup }) => (
          <>
            <TileLayer
              url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
              attribution={
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              }
            />
            {/* @ts-ignore */}
            <LocationMarker
              Marker={Marker}
              Popup={Popup}
              setLocation={setLocation}
            />
          </>
        )}
      </Map>
    </div>
  );
};

export default NewFarm;
