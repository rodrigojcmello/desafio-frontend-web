import { styled } from '@stitches/react';

export const SaveButtonStyle = styled('span', {
  borderRadius: '12px',
  backgroundColor: '$green500',
  padding: '8px 16px',
  height: 24,
  marginTop: -4,
  display: 'flex',
  color: '$white0',
  textDecoration: 'none',
  fontSize: 14,
  gap: 12,
  cursor: 'pointer',
  '& .edit_button__label': {
    lineHeight: '24px',
  },
});
