import {
  StyleSheet, FlatList, View, ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getCharacters } from '../../api';
import { ICharacter } from '../../interfaces/character';
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

  if (!characters.length) {
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator testID="spinner" size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView edges={['bottom']}>
      <FlatList
        testID="characters"
        data={characters}
        numColumns={2}
        style={styles.flatList}
        keyExtractor={(item: ICharacter) => `${item.id}`}
        columnWrapperStyle={styles.columnWrapperStyle}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CharacterList item={item} />}
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
    paddingTop: 20,
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
