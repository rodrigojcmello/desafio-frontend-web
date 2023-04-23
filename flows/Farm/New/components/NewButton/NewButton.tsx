import { AddIcon } from '@/components/Icons';
import Link from 'next/link';
import type { FC } from 'react';
import { NewButtonStyle } from '@/flows/Farm/New/components/NewButton/NewButton.style';

export const NewButton: FC = () => {
  return (
    <NewButtonStyle>
      <Link className={'new_button'} href={`/farm/new`}>
        <span className={'new_button__icon'}>
          <AddIcon />
        </span>
        <span className={'new_button__label'}>Adicionar</span>
      </Link>
    </NewButtonStyle>
  );
};
