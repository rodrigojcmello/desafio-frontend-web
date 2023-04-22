import type { RegisterOptions } from 'react-hook-form/dist/types/validator';
import type { HTMLInputTypeAttribute } from 'react';
import type { Farmer } from '@/services/checklist';

export interface EditProps {
  farmer?: Farmer;
  id?: string;
}

export interface FarmFields {
  amount_of_milk_produced: number;
  farmer_name: string;
  farmer_city: string;
  from_name: string;
  had_supervision: string;
  location: string;
  number_of_cows_head: number;
  to_name: string;
  type: Farmer['type'];
}

export interface InputOptions {
  id: string;
  label: string;
  type: HTMLInputTypeAttribute;
  validation?: RegisterOptions;
  defaultValue?: string | number;
  valueOptions?: { label: string; value: string }[];
}
