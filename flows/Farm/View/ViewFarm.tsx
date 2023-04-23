import type { FC } from 'react';
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
import { Item } from '@/flows/Farm/View/components/Item';
import Head from 'next/head';

const ViewFarm: FC<ViewProps> = ({ id, farmer }) => {
  const router = useRouter();

  const center: LatLngExpression = [
    farmer?.location.latitude || 0,
    farmer?.location.longitude || 0,
  ];

  const deleteFarm = async () => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Tem certeza que deseja apagar esta fazenda?')) {
      try {
        await deleteFarmByID(id);
        // eslint-disable-next-line no-alert
        alert('Fazenda deletada!');
        await router.push('/');
      } catch {
        // eslint-disable-next-line no-alert
        alert('Houve um erro ao deletar a fazenda');
      }
    }
  };

  const title = 'Detalhes da Fazenda';

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header
        title={title}
        leftComponent={<BackButton />}
        rightComponent={
          <>
            <EditButton id={id} />
            <DeleteButton onClick={deleteFarm} />
          </>
        }
      />
      {farmer ? (
        <div>
          <Item farmer={farmer} />
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
      ) : (
        <div>Houve um erro na requisição</div>
      )}
    </div>
  );
};

export default ViewFarm;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  try {
    const farmer = await getOneFarmByID(id as string);

    return {
      props: {
        id,
        farmer,
      },
    };
  } catch {
    // eslint-disable-next-line unicorn/no-null
    return { props: { id, farmer: null } };
  }
};
