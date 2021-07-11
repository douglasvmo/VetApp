import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import UnauthNavigation from './UnauthNavigation';
import AuthNavigation from './AuthNavigation';
import {useTheme, useAuth} from '@/Hooks';

export default function () {
  const {haveAuth} = useAuth();
  const {isDarkMode, navigationTheme} = useTheme();

  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        hidden={!haveAuth}
      />
      {haveAuth ? <AuthNavigation /> : <UnauthNavigation />}
    </NavigationContainer>
  );
}
