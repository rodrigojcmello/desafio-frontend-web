import type { ReactNode } from 'react';
import type * as ReactLeaflet from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';

type RenderProps = typeof ReactLeaflet;
export interface MapProps {
  width?: number;
  height?: number;
  className?: string;
  children: ReactNode | ((obj: RenderProps) => ReactNode);
  center: LatLngExpression;
  zoom: number;
}
