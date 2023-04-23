import React from 'react';
import { render, screen } from '@testing-library/react';
import { checklistMock } from '@/services/checklist/mocks';
import NewFarm from '@/flows/Farm/New/NewFarm';

jest.mock('../../../components/Map');
jest.mock('../../../components/LocationMarker');

describe('Edit Farm', () => {
  it('should populate inputs with data from API', async () => {
    render(
      // eslint-disable-next-line no-underscore-dangle
      <NewFarm id={checklistMock[0]._id} farmer={checklistMock[0]} />
    );
    expect(
      screen.getByLabelText('Quantidade de leite produzida no mês')
    ).toHaveValue('200');
  });
});
