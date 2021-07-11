import React from 'react';
import {View, Text} from 'react-native';
import {useTheme, useAuth} from '@/Hooks';
import {Button} from '@/Components';
import {useStyle} from './style';

export default function () {
  const style = useStyle();
  const {setToken} = useAuth();

  return (
    <View style={style.container}>
      <View style={style.headerWrapper}></View>
      <View style={style.homeWrapper}>
        <Text>Clinica</Text>
        <Button onPress={() => setToken(null)}>Sair</Button>
      </View>
    </View>
  );
}
