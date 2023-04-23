import type { FC } from 'react';
import Link from 'next/link';
import { BackIcon } from '@/components/Icons';
import { BackButtonStyle } from '@/components/BackButton/BackButton.style';
import type { BackButtonProps } from '@/components/BackButton/BackButton.types';

export const BackButton: FC<BackButtonProps> = ({ href }) => {
  return (
    <BackButtonStyle>
      <Link className={'back_button'} href={href || `/`}>
        <BackIcon />
      </Link>
    </BackButtonStyle>
  );
};
