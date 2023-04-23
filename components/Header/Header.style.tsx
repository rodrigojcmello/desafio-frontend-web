import { styled } from '@stitches/react';

export const HeaderStyle = styled('header', {
  height: 32,
  padding: '16px 24px',
  borderBottom: '1px solid #eaeaea',
  display: 'flex',
  gap: 24,
  '.header__title': {
    fontSize: 20,
    margin: 0,
    lineHeight: 1.5,
    color: '$blue500',
  },
});
