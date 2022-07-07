import React from 'react';
import { StyleSheet, View } from 'react-native';
import Characters from './app/screens/Characters/Characters';

function App() {
  return (
    <View style={styles.container}>
      <Characters />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
