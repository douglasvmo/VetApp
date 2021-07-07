import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@/Hooks';
import {Button} from '@/Components';

export default function () {
  const {Layout, Fonts} = useTheme();

  return (
    <View style={[Layout.fill]}>
      <View style={Layout.rowCenter}>
        <Text style={[Fonts.titleSmall]}>Clinica</Text>
      </View>
    </View>
  );
}
