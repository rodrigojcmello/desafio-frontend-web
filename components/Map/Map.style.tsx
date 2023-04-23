import { styled } from '@/components/theme';

export const MapStyle = styled('div', {
  aspectRatio: 1,
  '@bp4': {
    aspectRatio: 2,
  },
  '& > div': {
    borderRadius: '0px 0px 16px 16px',
  },
  '.map__container': {
    width: '100%',
    height: '100%',
  },
});
