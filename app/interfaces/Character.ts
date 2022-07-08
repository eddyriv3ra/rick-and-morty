export interface IOrigin {
  name: string;
  url: string;
}

export interface ILocation {
  name: string;
  url: string;
}

export interface ICharacter {
  id: number;
  type: string;
  name: string;
  image: string;
  species: string;
  status: number;
  gender: 'Male' | 'Female';
  url: string;
  origin: IOrigin;
  created: string;
  episode: string[];
  location: ILocation;
}
