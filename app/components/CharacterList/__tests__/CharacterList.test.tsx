import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import CharacterList from '../CharacterList';
import { ICharacter } from '../../../interfaces/character';

export const mockItem: ICharacter = {
  created: '2017-11-04T22:34:53.659Z',
  episode: ['https://rickandmortyapi.com/api/episode/8'],
  gender: 'Male',
  id: 20,
  image: 'https://rickandmortyapi.com/api/character/avatar/20.jpeg',
  location: { name: 'Interdimensional Cable', url: 'https://rickandmortyapi.com/api/location/6' },
  name: 'Ants in my Eyes Johnson',
  origin: { name: 'unknown', url: '' },
  species: 'Human',
  status: 'unknown',
  type: 'Human with ants in his eyes',
  url: 'https://rickandmortyapi.com/api/character/20',
};

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: mockedNavigate }),
}));

describe('CharacterList', () => {
  it('Should render correctly', () => {
    render(<CharacterList item={mockItem} />);
    const description = screen.getAllByTestId('desc');

    expect(screen.getByText('Species:')).toBeTruthy();
    expect(screen.getByText('Status:')).toBeTruthy();
    expect(description).toHaveLength(2);
    expect(description[0].props.children).toContain(mockItem.species);
    expect(description[1].props.children).toContain(mockItem.status);
  });

  it('Should navigate to SingleCharacter after onPress', () => {
    render(<CharacterList item={mockItem} />);
    fireEvent.press(screen.getByTestId('button'));
    expect(mockedNavigate).toHaveBeenCalled();
    expect(mockedNavigate).toHaveBeenCalledWith('SingleCharacter', { id: mockItem.id });
  });
});
