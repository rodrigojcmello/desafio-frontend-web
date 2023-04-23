import type { FC } from 'react';
import { SaveIcon } from '@/components/Icons';
import type { SaveButtonProps } from '@/flows/Farm/New/components/SaveButton/SaveButton.types';
import { SaveButtonStyle } from '@/flows/Farm/New/components/SaveButton/SaveButton.style';

export const SaveButton: FC<SaveButtonProps> = ({ onClick }) => {
  return (
    <SaveButtonStyle onClick={onClick}>
      <span className={'save_button__icon'}>
        <SaveIcon />
      </span>
      <span className={'save_button__label'}>Salvar</span>
    </SaveButtonStyle>
  );
};
