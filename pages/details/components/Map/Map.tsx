import type { FC } from 'react';
import type { MapProps } from '@/pages/details/components/Map/Map.types';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic<MapProps>(
  () => import('./DynamicMap').then((mod) => mod.DynamicMap),
  {
    ssr: false,
  }
);

const DEFAULT_WIDTH = 600;
const DEFAULT_HEIGHT = 600;

export const Map: FC<MapProps> = (props) => {
  const { width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT } = props;
  return (
    <div style={{ aspectRatio: width / height }}>
      <DynamicMap {...props} />
    </div>
  );
};
