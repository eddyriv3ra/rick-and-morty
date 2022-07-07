import {
  StyleSheet, Image, View, Text, FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { getCharacters } from '../../api';

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const chars = await getCharacters();
      setCharacters(chars);
    };
    getData();
  }, []);
  console.log(characters);

  return (
    <FlatList
      data={characters}
      numColumns={2}
      style={{ width: '100%' }}
      keyExtractor={(item) => item.id}
      columnWrapperStyle={{
        marginBottom: 20, justifyContent: 'space-between', height: 250,
      }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={{
          width: '48%', borderRadius: 20, borderWidth: 1,
        }}
        >
          <Image
            style={styles.tinyLogo}
            source={{
              uri: item?.image,
            }}
          />
          <View style={{ justifyContent: 'space-around', flex: 1, marginLeft: 5 }}>
            <Text style={{ fontWeight: '600' }}>{item?.name}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginRight: 2 }}>Species: </Text>
              <Text>{item?.species}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginRight: 2 }}>Status: </Text>
              <Text>{item.status}</Text>
            </View>
          </View>
        </View>
      )}
    />
  );
}

export default Characters;

const styles = StyleSheet.create({
  tinyLogo: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    resizeMode: 'cover',
  },
});
