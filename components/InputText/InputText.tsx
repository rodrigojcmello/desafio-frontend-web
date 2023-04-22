import type { FC } from 'react';
import type { InputTextProps } from '@/components/InputText';

export const InputText: FC<InputTextProps> = ({
  id,
  label,
  type,
  register,
  options,
  error,
  defaultValue,
}) => {
  return (
    <div>
      <label htmlFor={id}>
        {label}
        <input
          type={type}
          id={id}
          defaultValue={
            type === 'checkbox' ? undefined : (defaultValue as string | number)
          }
          defaultChecked={
            type === 'checkbox' ? (defaultValue as boolean) : undefined
          }
          {...register(id, options)}
        />
      </label>
      {error && <p>{error.message}</p>}
    </div>
  );
};
