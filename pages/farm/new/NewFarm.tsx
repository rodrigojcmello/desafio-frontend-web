import type { FC } from 'react';
import { InputText } from '@/pages/farm/new/components/InputText';

const fields = [
  { id: 'amount_of_milk_produced', label: 'amount_of_milk_produced' },
  { id: 'farmer_name', label: 'farmer_name' },
  { id: 'farmer_city', label: 'farmer_city' },
  { id: 'from_name', label: 'from_name' },
  { id: 'had_supervision', label: 'had_supervision' },
  { id: 'location_latitude', label: 'location_latitude' },
  { id: 'location_longitude', label: 'location_longitude' },
  { id: 'number_of_cows_head', label: 'number_of_cows_head' },
  { id: 'to_name', label: 'to_name' },
  { id: 'type', label: 'type' },
];

const NewFarm: FC = () => {
  return (
    <div>
      <h1>New farm</h1>
      <div>
        {fields.map((field) => (
          <InputText id={field.id} label={field.label} value={''} />
        ))}
      </div>
    </div>
  );
};

export default NewFarm;
