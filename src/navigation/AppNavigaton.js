import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Screens from './Screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const AppNavigation = () => {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default AppNavigation