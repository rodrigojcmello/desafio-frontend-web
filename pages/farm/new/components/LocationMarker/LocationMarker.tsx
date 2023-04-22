/* eslint-disable unicorn/no-null */
import { useMapEvents } from 'react-leaflet';
import type { LeafletType } from '@/pages/farm/view/components/Map/Map.types';
import { useState } from 'react';
import type { Position } from '@/pages/farm/new/components/LocationMarker/LocationMarker.types';

export const LocationMarker = ({ Marker, Popup }: LeafletType) => {
  const [currentPosition, setCurrentPosition] = useState<Position>(null);
  const [newLocation, setNewLocation] = useState<Position>(null);

  const map = useMapEvents({
    click({ latlng }) {
      if (currentPosition === null) {
        map.locate();
      } else {
        setNewLocation(latlng);
        map.flyTo(latlng, map.getZoom());
      }
    },
    locationfound({ latlng }) {
      setCurrentPosition(latlng);
      map.flyTo(latlng, map.getZoom());
    },
  });

  return currentPosition === null ? null : (
    <Marker position={newLocation || currentPosition}>
      <Popup>You are here</Popup>
    </Marker>
  );
};
