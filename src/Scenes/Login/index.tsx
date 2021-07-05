import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@/Hooks';

export default function () {
  const {dispath, isDarkMode, Layout, Fonts} = useTheme();

  console.log(isDarkMode);

  return (
    <View style={[Layout.fill]}>
      <Text style={[Fonts.titleRegular]}>Login</Text>
    </View>
  );
}
