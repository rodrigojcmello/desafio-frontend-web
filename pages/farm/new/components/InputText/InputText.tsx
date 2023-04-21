import type { FC } from 'react';
import type { InputTextProps } from '@/pages/farm/new/components/InputText/InputText.types';

export const InputText: FC<InputTextProps> = ({
  id,
  label,
  type,
  register,
  options,
  error,
}) => {
  return (
    <div>
      <label htmlFor={id}>
        {label}
        <input type={type} id={id} {...register(id, options)} />
      </label>
      {error && <p>{error.message}</p>}
    </div>
  );
};
