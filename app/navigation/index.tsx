import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './MainNavigator';

function Navigation() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}

export default Navigation;
