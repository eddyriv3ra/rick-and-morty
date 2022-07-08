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

export const getSingleCharacter = async (id: number) => {
  const req = await fetch(`${url}/${id}`);
  try {
    const parseData = await req.json();
    return parseData;
  } catch (error) {
    return false;
  }
};
