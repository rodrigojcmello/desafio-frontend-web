/* eslint-disable unicorn/no-null */
import { useEffect, useState } from 'react';
import type {
  LocationMarkerProps,
  Position,
} from '@/components/LocationMarker/index';
import { useMapEvents } from 'react-leaflet';

export const LocationMarker = ({
  Marker,
  Popup,
  setLocation,
  center,
  isNew,
}: LocationMarkerProps) => {
  const [currentPosition, setCurrentPosition] = useState<Position>(null);
  const [newLocation, setNewLocation] = useState<Position>(null);

  const map = useMapEvents({
    click({ latlng }) {
      setNewLocation(latlng);
      setLocation(latlng);
      map.flyTo(latlng, map.getZoom());
    },
    locationfound({ latlng }) {
      setCurrentPosition(latlng);
      setLocation(latlng);
      map.flyTo(latlng, map.getZoom());
    },
  });

  useEffect(() => {
    if (isNew) {
      map.locate();
    }
  }, [isNew]);

  const popupText =
    currentPosition && !newLocation ? 'Você está aqui' : 'Local da fazenda';

  const position = newLocation || currentPosition || center;

  return (
    <Marker position={position}>
      <Popup>{popupText}</Popup>
    </Marker>
  );
};
