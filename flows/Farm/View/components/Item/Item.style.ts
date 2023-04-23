import { styled } from '@stitches/react';

export const ItemStyle = styled('ul', {
  width: '100%',
  maxWidth: 600,
  margin: '0 auto',
  paddingBottom: 16,
  paddingTop: 16,
  paddingLeft: 0,
  li: {
    listStyleType: 'none',
    borderBottom: '1px solid $white100',
    padding: '12px 24px',
  },
  '.item__title': {
    fontSize: 14,
    lineHeight: 1.3,
    color: '#6c6c6c',
  },
  '.item__info': {
    fontSize: 18,
    lineHeight: 1.3,
  },
});
