import React from 'react';
import { render } from '@testing-library/react';
import List from '@/flows/Farm/List/List';
import { checklistMock } from '@/services/checklist/mocks';

describe('List', () => {
  it('should render data from props', async () => {
    const { findByText } = render(<List checklist={checklistMock} />);
    const textElement = await findByText('Marianos');
    expect(textElement).toBeInTheDocument();
    const textElement2 = await findByText('Campos do Jordão');
    expect(textElement2).toBeInTheDocument();
  });
  it('should render default message if request fails or are empty', async () => {
    const { findByText } = render(<List checklist={undefined} />);
    const textElement = await findByText('Houve um erro na requisição');
    expect(textElement).toBeInTheDocument();
  });
});
