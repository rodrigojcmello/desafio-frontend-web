import type { FC } from 'react';
import moment from 'moment';
import { getChecklistID } from '@/services/checklist/checklist';
import type { GetServerSideProps } from 'next';
import type { DetailsProps } from '@/pages/details/Details.types';

const Details: FC<DetailsProps> = ({ farmer }) => {
  // console.log('farmer', id, farmer);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {farmer ? (
        // eslint-disable-next-line no-underscore-dangle
        <div key={farmer._id}>
          <div>
            <b>Current owner</b>
            <div>{farmer.from.name}</div>
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
        </div>
      ) : undefined}
    </>
  );
};

export default Details;

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
