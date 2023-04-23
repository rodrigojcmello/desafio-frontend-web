import type { FC } from 'react';
import moment from 'moment';
import { deleteFarmByID, getOneFarmByID } from '@/services/checklist';
import type { GetServerSideProps } from 'next';
import type { ViewProps } from '@/flows/Farm/View/ViewFarm.types';
import 'leaflet/dist/leaflet.css';
import type { LatLngExpression } from 'leaflet';
import { useRouter } from 'next/router';
import { Map } from '@/components/Map';
import { Header } from '@/components/Header';
import { BackButton } from '@/components/BackButton';
import { EditButton } from '@/flows/Farm/New/components/EditButton';
import { DeleteButton } from '@/flows/Farm/New/components/DeleteButton';

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
      <Header
        title={'Detalhes da Fazenda'}
        leftComponent={<BackButton />}
        rightComponent={
          <>
            <EditButton id={id} />
            <DeleteButton onClick={deleteFarm} />
          </>
        }
      />
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

          <Map center={center} zoom={15}>
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
