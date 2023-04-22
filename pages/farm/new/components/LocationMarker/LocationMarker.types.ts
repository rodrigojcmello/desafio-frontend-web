import type { LeafletType } from '@/pages/farm/view/components/Map/Map.types';
import type { LatLngExpression } from 'leaflet';

export type Position = null | { lat: number; lng: number };

export type LocationMarkerProps = {
  setLocation: (location: Position) => void;
  center: LatLngExpression;
  isNew: boolean;
} & LeafletType;
