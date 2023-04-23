import { styled } from '@stitches/react';

export const ItemStyle = styled('ul', {
  width: '100%',
  maxWidth: 600,
  margin: '16px auto',
  paddingBottom: 16,
  li: {
    listStyleType: 'none',
    borderBottom: '1px solid $white100',
    padding: '12px 24px',
    '&:hover': {
      backgroundColor: '#e9f5ff',
    },
  },
  a: {
    textDecoration: 'none',
    color: 'black',
  },
  '.item__title': {
    fontSize: 18,
    lineHeight: 1.3,
  },
  '.item__info': {
    fontSize: 14,
    lineHeight: 1.3,
    color: '#6c6c6c',
  },
  '.item__from_now': {
    fontSize: 10,
    color: '#a0a0a0',
  },
});
