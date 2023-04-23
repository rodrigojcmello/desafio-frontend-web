import type { FC, PropsWithChildren } from 'react';
import { styled } from '@/components/theme';

export const ContainerBase = styled('div', {
  backgroundColor: '#FFF',
  height: '100vh',
  transition: `height $tDefault`,
  '@bp3': {
    borderRadius: '16px',
    height: 'calc(100vh - 32px)',
  },
  '@bp5': {
    margin: '0 auto',
    maxWidth: '768px',
    borderRadius: '16px',
  },
});

export const ContainerWrap = styled('div', {
  transition: `margin $tDefault`,
  '@bp3': {
    margin: '16px',
  },
});

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ContainerWrap>
      <ContainerBase>{children}</ContainerBase>
    </ContainerWrap>
  );
};
