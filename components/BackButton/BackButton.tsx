import type { FC, MouseEvent } from 'react';
import Link from 'next/link';
import { BackIcon } from '@/components/Icons';
import { BackButtonStyle } from '@/components/BackButton/BackButton.style';
import type { BackButtonProps } from '@/components/BackButton/BackButton.types';
import { useRouter } from 'next/router';

export const BackButton: FC<BackButtonProps> = ({ href }) => {
  const { back } = useRouter();

  const clickBack = (event?: MouseEvent<HTMLAnchorElement>) => {
    if (!href) {
      event?.preventDefault();
      back();
    }
  };

  return (
    <BackButtonStyle>
      <Link className={'back_button'} onClick={clickBack} href={href || `/`}>
        <BackIcon />
      </Link>
    </BackButtonStyle>
  );
};
