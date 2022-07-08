import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ICharacter } from '../../interfaces/character';
import { AppStackParamList } from '../../interfaces/navigation';

type CharacterListScreenNavigationProp =
  NativeStackNavigationProp<AppStackParamList>;

function CharacterList({ item }: { item: ICharacter }) {
  const navigation = useNavigation<CharacterListScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('SingleCharacter', {
            id: item.id
          })
        }
      >
        <View style={styles.wrapper}>
          <Image
            style={styles.image}
            source={{
              uri: item?.image
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
    height: 250
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    resizeMode: 'cover'
  },
  wrapper: {
    height: '100%'
  },
  textContainer: {
    paddingLeft: 5,
    flex: 1,
    justifyContent: 'space-evenly'
  },
  name: {
    fontWeight: '600'
  },
  row: {
    flexDirection: 'row'
  },
  extraMargin: {
    marginRight: 2
  }
});
