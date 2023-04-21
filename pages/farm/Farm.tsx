import type { FC } from 'react';
import moment from 'moment';
import { getChecklistID } from '@/services/checklist/checklist';
import type { GetServerSideProps } from 'next';
import type { DetailsProps } from '@/pages/farm/Farm.types';
import 'leaflet/dist/leaflet.css';
import { Map } from '@/pages/farm/components/Map';
import type { LatLngExpression } from 'leaflet';

const Farm: FC<DetailsProps> = ({ farmer }) => {
  // console.log('farmer', farmer);

  const center: LatLngExpression = [
    farmer.location.latitude,
    farmer.location.longitude,
  ];

  return (
    <div>
      {farmer ? (
        // eslint-disable-next-line no-underscore-dangle
        <div key={farmer._id}>
          <div>
            <b>Current owner</b>
            <div>{farmer.from.name}</div>
          </div>
          <div>
            <b>Name</b>
            <div>{farmer.farmer.name}</div>
          </div>
          <div>
            <b>City</b>
            <div>{farmer.farmer.city}</div>
          </div>
          <div>
            <b>Created at</b>
            <div>
              {moment(farmer.created_at).format('DD/MM/YYYY')}{' '}
              {moment(farmer.created_at).fromNow()}
            </div>
          </div>
          <div>
            <b>Amount of milk</b>
            <div>{farmer.amount_of_milk_produced}</div>
          </div>
          <div>
            <b>Had supervision</b>
            <div>{farmer.had_supervision}</div>
          </div>
          <div>
            <b>Location</b>
            <div>
              lat: {farmer.location.latitude} long: {farmer.location.longitude}
            </div>
          </div>
          <div>
            <b>Cows head</b>
            <div>{farmer.number_of_cows_head}</div>
          </div>
          <div>
            <b>Next owner</b>
            <div>{farmer.to.name}</div>
          </div>
          <div>
            <b>Type</b>
            <div>{farmer.type}</div>
          </div>
          <div>
            <b>last update</b>
            <div>
              {moment(farmer.updated_at).format('DD/MM/YYYY')}{' '}
              {moment(farmer.updated_at).fromNow()}
            </div>
          </div>

          <Map
            width={800}
            height={400}
            center={center}
            // center={[farmer.location.latitude, farmer.location.longitude]}
            zoom={15}
          >
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
                  attribution={
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  }
                />
                <Marker position={center}>
                  <Popup>{farmer.farmer.name}</Popup>
                </Marker>
              </>
            )}
          </Map>
        </div>
      ) : undefined}
    </div>
  );
};

export default Farm;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const farmer = await getChecklistID(id as string);

  return {
    props: {
      id,
      farmer,
    },
  };
};
