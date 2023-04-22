import type { LeafletType } from '@/pages/farm/view/components/Map/Map.types';

export type Position = null | { lat: number; lng: number };

export type LocationMarkerProps = {
  setLocation: (location: Position) => void;
} & LeafletType;
