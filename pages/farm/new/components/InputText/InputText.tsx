import type { FC } from 'react';
import type { InputTextProps } from '@/pages/farm/new/components/InputText/InputText.types';

export const InputText: FC<InputTextProps> = ({ id, label, value }) => {
  return (
    <div>
      <label htmlFor={id}>
        {label}
        <input type={'text'} id={id} value={value} />
      </label>
    </div>
  );
};
