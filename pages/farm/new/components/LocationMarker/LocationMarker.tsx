/* eslint-disable unicorn/no-null */
import { useMapEvents } from 'react-leaflet';
import { useState } from 'react';
import type {
  LocationMarkerProps,
  Position,
} from '@/pages/farm/new/components/LocationMarker';

export const LocationMarker = ({
  Marker,
  Popup,
  setLocation,
}: LocationMarkerProps) => {
  const [currentPosition, setCurrentPosition] = useState<Position>(null);
  const [newLocation, setNewLocation] = useState<Position>(null);

  const map = useMapEvents({
    click({ latlng }) {
      if (currentPosition === null) {
        map.locate();
      } else {
        setNewLocation(latlng);
        setLocation(latlng);
        map.flyTo(latlng, map.getZoom());
      }
    },
    locationfound({ latlng }) {
      setCurrentPosition(latlng);
      setLocation(latlng);
      map.flyTo(latlng, map.getZoom());
    },
  });

  const popupText =
    currentPosition && !newLocation ? 'Você está aqui' : 'Local da fazenda';

  return currentPosition === null ? null : (
    <Marker position={newLocation || currentPosition}>
      <Popup>{popupText}</Popup>
    </Marker>
  );
};
