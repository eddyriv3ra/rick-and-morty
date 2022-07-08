import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View, Image, Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { EvilIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { AppStackParamList } from '../../interfaces/navigation';
import { ICharacter } from '../../interfaces/character';
import { getSingleCharacter } from '../../api';

type SingleCharacterProps = NativeStackScreenProps<AppStackParamList, 'SingleCharacter', 'MyStack'>;

function SingleCharacter({ route }: SingleCharacterProps) {
  const [singleCharacter, setSingleCharacter] = useState<ICharacter>();
  const { id } = route.params;

  useEffect(() => {
    const getData = async () => {
      const character = await getSingleCharacter(id);
      setSingleCharacter(character);
    };
    getData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{
        height: '40%',
      }}
      >
        <View style={styles.topProfileContainer}>
          <SafeAreaView edges={['top']} />
          <Image
            style={styles.image}
            source={{
              uri: singleCharacter?.image,
            }}
          />
          <View style={{
            alignItems: 'center',
            flex: 1,
            justifyContent: 'space-evenly',
          }}
          >
            <Text style={{ fontWeight: '700', fontSize: 20 }}>{singleCharacter?.name}</Text>
            <View style={{
              flexDirection: 'row', alignItems: 'center', flex: 1,
            }}
            >
              <EvilIcons name="location" size={24} color="black" />
              <Text>{singleCharacter?.location.name}</Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView style={{ paddingTop: 30, marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row', marginBottom: 30, alignItems: 'baseline' }}>
          <Text style={{ fontWeight: '500', fontSize: 17, fontStyle: 'italic' }}>Species: </Text>
          <Text>{singleCharacter?.species}</Text>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 30, alignItems: 'baseline' }}>
          <Text style={{ fontWeight: '500', fontSize: 17, fontStyle: 'italic' }}>Gender: </Text>
          <Text>{singleCharacter?.gender}</Text>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 30, alignItems: 'baseline' }}>
          <Text style={{ fontWeight: '500', fontSize: 17, fontStyle: 'italic' }}>Origin: </Text>
          <Text>{singleCharacter?.origin.name}</Text>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 30, alignItems: 'baseline' }}>
          <Text style={{ fontWeight: '500', fontSize: 17, fontStyle: 'italic' }}>Total episodes: </Text>
          <Text>{singleCharacter?.episode.length}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default SingleCharacter;

const styles = StyleSheet.create({
  topProfileContainer: {
    height: 200,
    borderRadius: 100,
    flex: 1,
    alignItems: 'center',
  },
  image: {
    borderWidth: 2,
    borderColor: 'black',
    height: 200,
    width: 200,
    borderRadius: 100,
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
