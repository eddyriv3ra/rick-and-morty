import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ICharacter } from '../../interfaces/character';
import { IEpisode } from '../../interfaces/episode';
import { ILocation } from '../../interfaces/location';

interface CharacterDescriptionType {
  singleCharacter: ICharacter;
  singleCharacterLocation: ILocation;
  episodes: IEpisode[];
}

function CharacterDescription({
  singleCharacter,
  singleCharacterLocation,
  episodes
}: CharacterDescriptionType) {
  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Species: </Text>
        <Text>{singleCharacter?.species}</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Gender: </Text>
        <Text>{singleCharacter?.gender}</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Origin: </Text>
        <Text>{singleCharacter?.origin.name}</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Total episodes: </Text>
        <Text>{singleCharacter?.episode?.length}</Text>
      </View>

      <View style={styles.separator} />
      <View style={{ marginTop: 30, marginBottom: 30 }}>
        <Text style={styles.subTitle}>Location</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Dimension: </Text>
        <Text>{singleCharacterLocation?.dimension}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Total residents: </Text>
        <Text>{singleCharacterLocation?.residents?.length}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Name: </Text>
        <Text>{singleCharacterLocation?.name}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Type: </Text>
        <Text>{singleCharacterLocation?.type}</Text>
      </View>

      <View style={styles.separator} />
      <View style={styles.spacer}>
        <Text style={styles.subTitle}>Chapters</Text>
      </View>
      <View style={styles.extraMarginBottom}>
        {episodes?.map((episode) => (
          <Text key={episode.id} style={styles.chapters}>
            {episode.name}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

export default CharacterDescription;

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 30,
    marginHorizontal: 20,
    paddingBottom: 40
  },
  textContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    alignItems: "center"
  },
  title: {
    fontWeight: '500',
    fontSize: 17,
    fontStyle: 'italic'
  },
  separator: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  subTitle: {
    fontWeight: '500',
    fontSize: 20,
    fontStyle: 'italic'
  },
  spacer: {
    marginTop: 30,
    marginBottom: 30
  },
  chapters: {
    marginBottom: 10,
    fontSize: 15
  },
  extraMarginBottom: {
    marginBottom: 30
  }
});
