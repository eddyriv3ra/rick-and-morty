import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Characters from '../screens/Characters';
import SingleCharacter from '../screens/SingleCharacter';
import { AppStackParamList } from '../interfaces/navigation';

const Stack = createNativeStackNavigator<AppStackParamList>();

function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Characters"
      screenOptions={{
        screenOrientation: 'portrait',
      }}
    >
      <Stack.Screen name="Characters" component={Characters} />
      <Stack.Screen
        options={{ title: '' }}
        name="SingleCharacter"
        component={SingleCharacter}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
