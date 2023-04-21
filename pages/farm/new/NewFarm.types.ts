import type { RegisterOptions } from 'react-hook-form/dist/types/validator';
import type { HTMLInputTypeAttribute } from 'react';
import type { Farmer } from '@/services/checklist/types';

export interface FarmFields {
  amount_of_milk_produced: number;
  farmer_name: string;
  farmer_city: string;
  from_name: string;
  had_supervision: boolean;
  location_latitude: number;
  location_longitude: number;
  number_of_cows_head: number;
  to_name: string;
  type: Farmer['type'];
}

export interface InputOptions {
  id: string;
  label: string;
  type: HTMLInputTypeAttribute;
  options?: RegisterOptions;
}
