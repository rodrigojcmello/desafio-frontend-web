import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import type { FarmFields } from '@/pages/farm/new/NewFarm.types';
import { customAlphabet } from 'nanoid/async';
import { fields } from '@/pages/farm/new/NewFarm.validation';
import { InputText } from '@/components/InputText';
import { Map } from '@/pages/farm/view/components/Map';
import dynamic from 'next/dynamic';
import type { Position } from '@/pages/farm/new/components/LocationMarker';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { setNewFarm } from '@/services/checklist';

const LocationMarker = dynamic(
  () => import('./components/LocationMarker').then((mod) => mod.LocationMarker),
  {
    ssr: false,
  }
);

const NewFarm: FC = () => {
  // eslint-disable-next-line unicorn/no-null
  const [location, setLocation] = useState<Position>(null);
  const router = useRouter();

  const {
    formState: { errors },
    register,
    handleSubmit,
    setValue,
    getValues,
  } = useForm<FarmFields>();

  // const inputFilled = {
  //   amount_of_milk_produced: undefined,
  //   farmer_city: undefined,
  //   farmer_name: undefined,
  //   from_name: undefined,
  //   had_supervision: undefined,
  //   location: location?.lat ? `${location?.lat}, ${location?.lng}` : undefined,
  //   number_of_cows_head: undefined,
  //   to_name: undefined,
  //   type: undefined,
  // };

  useEffect(() => {
    if (location?.lat) {
      setValue('location', `${location?.lat}, ${location?.lng}`);
    }
  }, [location]);

  const onSubmit = async (data: FarmFields) => {
    const nanoid = customAlphabet('1234567890', 8);
    const id = await nanoid();

    const date = new Date();

    const [lat, lng] = data.location.split(', ');

    console.log({ data });

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
      },
    ]);

    alert('Fazenda cadastrada!');
    router.push('/');
  };

  return (
    <div>
      <h1>New farm</h1>
      <form autoComplete={'off'} onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => (
          <InputText
            key={field.id}
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
