import React from 'react';
import {View, Text} from 'react-native';
import {useTheme, useAuth} from '@/Hooks';
import {Button, ContainerScreen} from '@/Components';

export default function () {
  const {setToken} = useAuth();
  const {Metrics} = useTheme();

  const ConteinerHeader = <Button onPress={()=> setToken(null)}>sair</Button>;

  return <ContainerScreen Header={ConteinerHeader}></ContainerScreen>;
}
