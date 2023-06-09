/* eslint-disable unused-imports/no-unused-vars */
import type { FC } from 'react';
import Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import type { MapProps } from '@/components/Map/Map.types';
import { useEffect } from 'react';

const { MapContainer } = ReactLeaflet;

export const DynamicMap: FC<MapProps> = ({ children, ...rest }) => {
  useEffect(() => {
    (async function init() {
      // eslint-disable-next-line no-underscore-dangle,@typescript-eslint/no-explicit-any
      delete (Leaflet.Icon.Default.prototype as any)._getIconUrl;
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: iconRetinaUrl.src,
        iconUrl: iconUrl.src,
        shadowUrl: shadowUrl.src,
      });
    })();
  }, []);

  return (
    <MapContainer className={'map__container'} {...rest}>
      {typeof children === 'function' ? children(ReactLeaflet) : children}
    </MapContainer>
  );
};
