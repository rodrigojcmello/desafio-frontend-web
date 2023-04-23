import { styled } from '@stitches/react';

export const BackButtonStyle = styled('header', {
  '.back_button': {
    height: 32,
    width: 32,
    display: 'block',
    '& > span': {
      padding: 4,
      color: '$black1000',
    },
  },
});
