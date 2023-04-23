import { styled } from '@stitches/react';

export const InputTextStyle = styled('header', {
  height: 72,
  '.input_label': {
    fontSize: 12,
    fontWeight: 500,
    marginBottom: 2,
    display: 'block',
  },
  '.input_text': {
    height: 28,
    display: 'block',
    borderRadius: 8,
    padding: '4px 12px',
    border: '1px solid $white200',
    width: '100%',
    '&:focus': {
      outlineColor: '$blue500',
      outlineWidth: 2,
    },
    '&:read-only': {
      backgroundColor: '$white100',
      cursor: 'not-allowed',
    },
  },
  '.input__error': {
    color: '$purple500',
    fontSize: 10,
    margin: '-1px 0 0 0',
    fontWeight: 500,
    display: 'block',
  },
});
