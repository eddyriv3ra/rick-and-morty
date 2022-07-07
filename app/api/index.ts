const url = 'https://rickandmortyapi.com/api/character';

export const getCharacters = async () => {
  const req = await fetch(url);
  try {
    const parseData = await req.json();
    return parseData.results;
  } catch (error) {
    return false;
  }
};
