import type { FieldError, UseFormRegister } from 'react-hook-form';
import type { FarmFields } from '@/pages/farm/new/NewFarm.types';
import type { RegisterOptions } from 'react-hook-form/dist/types/validator';
import type { HTMLInputTypeAttribute } from 'react';

export interface InputTextProps {
  id: keyof FarmFields;
  label: string;
  type: HTMLInputTypeAttribute;
  register: UseFormRegister<FarmFields>;
  options?: RegisterOptions;
  error?: FieldError;
}
