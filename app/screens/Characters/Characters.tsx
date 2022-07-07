import {
  StyleSheet, FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getCharacters } from '../../api';
import { ICharacter } from '../../interfaces/Character';
import CharacterList from '../../components/CharacterList';

function Characters() {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    const getData = async () => {
      const chars = await getCharacters();
      setCharacters(chars);
    };
    getData();
  }, []);

  return (
    <SafeAreaView edges={['bottom', 'top']}>
      <FlatList
        data={characters}
        numColumns={2}
        style={styles.flatList}
        keyExtractor={(item: ICharacter) => `${item.id}`}
        columnWrapperStyle={styles.columnWrapperStyle}
        showsVerticalScrollIndicator={false}
        renderItem={CharacterList}
      />
    </SafeAreaView>
  );
}

export default Characters;

const styles = StyleSheet.create({
  columnWrapperStyle: {
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  flatList: {
    paddingHorizontal: 10,
  },
});
