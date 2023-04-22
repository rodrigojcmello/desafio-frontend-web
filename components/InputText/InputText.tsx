import type { FC } from 'react';
import type { InputTextProps } from '@/components/InputText';

export const InputText: FC<InputTextProps> = ({
  id,
  label,
  type,
  register,
  validation,
  error,
  defaultValue,
  valueOptions,
}) => {
  return (
    <div>
      {type === 'radio' ? undefined : (
        <label htmlFor={id}>
          {label}
          <input
            type={type}
            id={id}
            autoComplete={'off'}
            defaultValue={
              type === 'checkbox'
                ? undefined
                : (defaultValue as string | number)
            }
            {...(id === 'location' ? { readOnly: true } : undefined)}
            {...register(id, validation)}
          />
        </label>
      )}
      {type === 'radio' && valueOptions ? (
        <>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>{label}</label>
          {valueOptions.map((valueOption) => {
            return (
              <label htmlFor={valueOption.value} key={valueOption.value}>
                <input
                  type={type}
                  value={valueOption.value}
                  id={valueOption.value}
                  defaultChecked={`${defaultValue}` === valueOption.value}
                  {...register(id)}
                />
                {valueOption.label}
              </label>
            );
          })}
        </>
      ) : undefined}
      {error && <p>{error.message}</p>}
    </div>
  );
};
