import type { RegisterOptions } from 'react-hook-form/dist/types/validator';
import type { HTMLInputTypeAttribute } from 'react';

export interface FarmFields {
  amount_of_milk_produced: number;
  farmer_name: string;
  farmer_city: string;
  from_name: string;
  had_supervision: string;
  location_latitude: number;
  location_longitude: number;
  number_of_cows_head: number;
  to_name: string;
  type: string;
}

export interface InputOptions {
  id: string;
  label: string;
  type: HTMLInputTypeAttribute;
  options?: RegisterOptions;
}
