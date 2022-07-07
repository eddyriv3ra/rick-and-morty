import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Characters from '../screens/Characters';
import SingleCharacter from '../screens/SingleCharacter';
import { AppStackParamList } from '../interfaces/navigation';

const Stack = createNativeStackNavigator<AppStackParamList>();

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Characters"
    >
      <Stack.Screen name="Characters" component={Characters} />
      <Stack.Screen name="SingleCharacter" component={SingleCharacter} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
