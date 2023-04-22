import type { ReactNode } from 'react';
import type * as ReactLeaflet from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';

export type LeafletType = typeof ReactLeaflet;
export interface MapProps {
  width?: number;
  height?: number;
  className?: string;
  children: ReactNode | ((obj: LeafletType) => ReactNode);
  center: LatLngExpression;
  zoom: number;
}
