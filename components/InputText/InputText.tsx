import type { FC } from 'react';
import type { InputTextProps } from '@/components/InputText';
import { InputTextStyle } from '@/components/InputText/InputText.style';

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
    <InputTextStyle>
      {type === 'radio' ? undefined : (
        <label htmlFor={id}>
          <span className={'input_label'}>{label}</span>
          <input
            type={type}
            id={id}
            autoComplete={'off'}
            className={'input_text'}
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
          <span className={'input_label'}>{label}</span>
          <span className={'input_radio__options'}>
            {valueOptions.map((valueOption) => {
              return (
                <label htmlFor={valueOption.value} key={valueOption.value}>
                  <input
                    type={type}
                    className={'input_radio'}
                    value={valueOption.value}
                    id={valueOption.value}
                    defaultChecked={`${defaultValue}` === valueOption.value}
                    {...register(id, validation)}
                  />
                  {valueOption.label}
                </label>
              );
            })}
          </span>
        </>
      ) : undefined}
      {error && <p className={'input__error'}>{error.message}</p>}
    </InputTextStyle>
  );
};
