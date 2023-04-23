import type { FC } from 'react';
import Link from 'next/link';
import { BackIcon } from '@/components/Icons';
import { BackButtonStyle } from '@/components/BackButton/BackButton.style';

export const BackButton: FC = () => {
  return (
    <BackButtonStyle>
      <Link className={'back_button'} href={`/`}>
        <BackIcon />
      </Link>
    </BackButtonStyle>
  );
};
