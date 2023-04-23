import type { FC } from 'react';
import type { MapProps } from '@/components/Map/Map.types';
import dynamic from 'next/dynamic';
import { MapStyle } from '@/components/Map/Map.style';

const DynamicMap = dynamic<MapProps>(
  () => import('@/components/Map/DynamicMap').then((mod) => mod.DynamicMap),
  {
    ssr: false,
  }
);

export const Map: FC<MapProps> = (props) => {
  return (
    <MapStyle>
      <DynamicMap {...props} />
    </MapStyle>
  );
};
