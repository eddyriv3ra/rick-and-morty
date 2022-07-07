import {
  StyleSheet, Text, View, TouchableOpacity, Image,
} from 'react-native';
import React from 'react';
import { ICharacter } from '../../interfaces/Character';

function CharacterList({ item }: { item: ICharacter }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.wrapper}>
          <Image
            style={styles.image}
            source={{
              uri: item?.image,
            }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{item?.name}</Text>
            <View style={styles.row}>
              <Text style={styles.extraMargin}>Species: </Text>
              <Text>{item?.species}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.extraMargin}>Status: </Text>
              <Text>{item.status}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default CharacterList;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    borderWidth: 1,
    width: '48%',
    height: 250,
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    resizeMode: 'cover',
  },
  wrapper: {
    height: '100%',
  },
  textContainer: {
    paddingLeft: 5,
    flex: 1,
    justifyContent: 'space-evenly',
  },
  name: {
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
  },
  extraMargin: {
    marginRight: 2,
  },
});