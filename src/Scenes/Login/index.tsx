import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@/Hooks';
import {LoginWrapper, TextinputAnimated} from '@/Components';

export default function () {
  const {isDarkMode, Layout, Fonts} = useTheme();

  console.log(isDarkMode);

  return (
    <View
      style={[
        Layout.fill,
        Layout.justifyContentCenter,
        {backgroundColor: 'blue'},
      ]}>
      <Text style={[Fonts.titleRegular]}>Login</Text>
      <LoginWrapper>
        <TextinputAnimated label="Login" border  borderColor="gray"  />
        <TextinputAnimated label="Senha" border  borderColor="gray"  secureTextEntry/>
      </LoginWrapper>
    </View>
  );
}
