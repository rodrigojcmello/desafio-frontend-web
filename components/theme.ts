import { createStitches } from '@stitches/react';

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
  theme: {
    colors: {
      blue500: '#2196f3',
    },
    transitions: {
      tDefault: '0.3s ease',
    },
  },
});
