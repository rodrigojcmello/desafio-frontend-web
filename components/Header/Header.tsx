import type { FC } from 'react';
import type { HeaderProps } from '@/components/Header';
import { HeaderStyle } from '@/components/Header/Header.style';

export const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <HeaderStyle>
      <h1 className={'header__title'}>{title}</h1>
    </HeaderStyle>
  );
};
