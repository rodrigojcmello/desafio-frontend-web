import { createStitches } from '@stitches/react';
import type { FC, PropsWithChildren } from 'react';

export const { styled, css } = createStitches({
  media: {
    bp1: '(min-width: 321px)',
    bp2: '(min-width: 376px)',
    bp3: '(min-width: 481px)',
    bp4: '(min-width: 641px)',
    bp5: '(min-width: 769px)',
    bp6: '(min-width: 1025px)',
    bp7: '(min-width: 1281px)',
    bp8: '(min-width: 1441px)',
  },
});

const TRANSITION = '0.3s ease';

export const ContainerBase = styled('div', {
  backgroundColor: '#FFF',
  height: '100vh',
  transition: `height ${TRANSITION}`,
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
  transition: `margin ${TRANSITION}`,
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
