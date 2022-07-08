import { ICharacter } from '../interfaces/character';
import { IEpisode } from '../interfaces/episode';
import { ILocation } from '../interfaces/location';

const url = 'https://rickandmortyapi.com/api/character';

export type ResultType = {
  singleCharacterReq: ICharacter;
  locationReq: ILocation;
  episodeReq: IEpisode[];
};

export const getCharacters = async () => {
  try {
    const req = await fetch(url);
    const parseData = await req.json();
    return parseData.results;
  } catch (error) {
    return false;
  }
};

export const getSingleCharacter = async (
  id: number
): Promise<ResultType | undefined> => {
  try {
    const singleCharacterReq = await (await fetch(`${url}/${id}`)).json();
    const locationReq = await getLocationData(singleCharacterReq.location.url);
    const episodeReq = await getEpisodeData(singleCharacterReq.episode);
    return { singleCharacterReq, locationReq, episodeReq };
  } catch (error) {
    return undefined;
  }
};

const getLocationData = async (urlLocation: string) => {
  try {
    const req = await (await fetch(urlLocation)).json();
    return req;
  } catch (error) {
    return false;
  }
};

const getEpisodeData = async (episodes: IEpisode[]) => {
  const episodesData = await Promise.all(
    episodes.map(async (episodeUrl: any) => {
      const response = await (await fetch(episodeUrl)).json();
      return response;
    })
  );
  return episodesData;
};
