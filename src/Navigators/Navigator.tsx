import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import UnauthNavigation from './UnauthNavigation';
import AuthNavigation from './AuthNavigation';
import {useTheme} from '@/Hooks';

export default function () {
  const haveAuth = true;
  const {isDarkMode, NavigationTheme} = useTheme();

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer theme={NavigationTheme}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        {haveAuth ? <AuthNavigation /> : <UnauthNavigation />}
      </NavigationContainer>
    </SafeAreaView>
  );
}
