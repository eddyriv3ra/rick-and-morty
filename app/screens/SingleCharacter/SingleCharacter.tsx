import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { EvilIcons } from '@expo/vector-icons';
import { AppStackParamList } from '../../interfaces/navigation';
import { getSingleCharacter, ResultType } from '../../api';
import CharacterDescription from '../../components/CharacterDescription';

type SingleCharacterProps = NativeStackScreenProps<
  AppStackParamList,
  'SingleCharacter'
>;

function SingleCharacter({ route }: SingleCharacterProps) {
  const [singleCharacterInfo, setSingleCharacterInfo] = useState<ResultType>();
  const { id } = route.params;

  useEffect(() => {
    const getData = async (): Promise<void> => {
      const data = await getSingleCharacter(id);
      setSingleCharacterInfo(data);
    };
    getData();
  }, []);

  const { singleCharacterReq, locationReq, episodeReq } = singleCharacterInfo || {};

  if (
    singleCharacterReq === undefined
    || episodeReq === undefined
  ) {
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <View style={styles.topContainer}>
        <View style={styles.topProfileContainer}>
          <Image
            style={styles.image}
            source={{
              uri: singleCharacterReq?.image,
            }}
          />
          <View style={styles.topProfileInfo}>
            <Text style={styles.characterName}>{singleCharacterReq?.name}</Text>
            <View style={styles.profileLocation}>
              <EvilIcons name="location" size={24} color="black" />
              <Text>{singleCharacterReq?.location.name}</Text>
            </View>
          </View>
        </View>
      </View>
      <CharacterDescription
        singleCharacter={singleCharacterReq}
        singleCharacterLocation={locationReq}
        episodes={episodeReq}
      />
    </SafeAreaView>
  );
}

export default SingleCharacter;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  topContainer: {
    height: '40%',
    marginTop: 20,
  },
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
  topProfileInfo: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
  },
  characterName: {
    fontWeight: '700',
    fontSize: 20,
  },
  profileLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
