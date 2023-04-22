import type { FC } from 'react';
import moment from 'moment';
import { deleteFarmByID, getOneFarmByID } from '@/services/checklist';
import type { GetServerSideProps } from 'next';
import type { ViewProps } from '@/pages/farm/view/ViewFarm.types';
import 'leaflet/dist/leaflet.css';
import { Map } from '@/pages/farm/view/components/Map';
import type { LatLngExpression } from 'leaflet';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ViewFarm: FC<ViewProps> = ({ id, farmer }) => {
  const router = useRouter();
  // console.log('farmer', farmer);

  const center: LatLngExpression = [
    farmer.location.latitude,
    farmer.location.longitude,
  ];

  const deleteFarm = async () => {
    if (window.confirm('Tem certeza que deseja apagar esta fazenda?')) {
      await deleteFarmByID(id);
      alert('Fazenda deletada!');
      router.push('/');
    }
  };

  return (
    <div>
      <div>
        <h1>View farm</h1>
        {/* eslint-disable-next-line no-underscore-dangle */}
        <Link href={`/farm/edit/${id}`}>Editar</Link>
        <button type={'button'} onClick={deleteFarm}>
          Apagar
        </button>
      </div>
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
            <div>{farmer.had_supervision ? 'true' : 'false'}</div>
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

          <Map width={800} height={400} center={center} zoom={15}>
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

export default ViewFarm;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const farmer = await getOneFarmByID(id as string);

  return {
    props: {
      id,
      farmer,
    },
  };
};
