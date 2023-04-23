import { DeleteIcon } from '@/components/Icons';
import type { FC } from 'react';
import type { DeleteButtonProps } from '@/flows/Farm/New/components/DeleteButton';
import { DeleteButtonStyle } from '@/flows/Farm/New/components/DeleteButton/DeleteButton.style';

export const DeleteButton: FC<DeleteButtonProps> = ({ onClick }) => {
  return (
    <DeleteButtonStyle className={'delete_button'} onClick={onClick}>
      <span className={'delete_button__icon'}>
        <DeleteIcon />
      </span>
    </DeleteButtonStyle>
  );
};
