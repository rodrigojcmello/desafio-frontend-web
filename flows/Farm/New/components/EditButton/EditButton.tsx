import { EditIcon } from '@/components/Icons';
import Link from 'next/link';
import type { FC } from 'react';
import type { EditButtonProps } from '@/flows/Farm/New/components/EditButton';
import { EditButtonStyle } from '@/flows/Farm/New/components/EditButton/EditButton.style';

export const EditButton: FC<EditButtonProps> = ({ id }) => {
  return (
    <EditButtonStyle>
      <Link className={'edit_button'} href={`/farm/edit/${id}`}>
        <span className={'edit_button__icon'}>
          <EditIcon />
        </span>
        <span className={'edit_button__label'}>Editar</span>
      </Link>
    </EditButtonStyle>
  );
};
