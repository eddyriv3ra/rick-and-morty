import React from 'react';
import {
  render, screen, act, cleanup,
} from '@testing-library/react-native';
import Characters from '../Characters';
import { ICharacter } from '../../../interfaces/character';

export const mockItems: ICharacter[] = [
  {
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
  },
  {
    created: '2017-11-04T18:50:21.651Z',
    episode: ['https://rickandmortyapi.com/api/episode/1', 'https://rickandmortyapi.com/api/episode/2'],
    gender: 'Male',
    id: 2,
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
    name: 'Morty Smith',
    origin: { name: 'unknown', url: '' },
    species: 'Human',
    status: 'Alive',
    type: '',
    url: 'https://rickandmortyapi.com/api/character/2',
  },
];

const promise = jest.fn(); // Promise.resolve(mockItems)
const mockGetCharacters = promise;

jest.mock('../../../components/CharacterList');

jest.mock('../../../api', () => ({
  getCharacters: () => mockGetCharacters,
}));

afterEach(() => {
  cleanup();
});

describe('Characters', () => {
  it('Should render Activity Indicator if state is an empty array', async () => {
    render(<Characters />);
    promise.mockImplementation(() => []);
    await act(async () => {
      await promise;
    });

    expect(screen.getByTestId('spinner')).toBeTruthy();
  });

  it('Should display the flastlist component if the sate if not an empty array', async () => {
    render(<Characters />);
    promise.mockImplementation(() => mockItems);
    await act(async () => {
      await promise;
    });
    expect(screen.queryByTestId('spinner')).toBeFalsy();
    expect(screen.getByTestId('characters')).toBeTruthy();
  });
});
