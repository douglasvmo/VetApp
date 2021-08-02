import React from 'react';
import {useTheme, useAuth} from '@/Hooks';
import {Button, ContainerScreen} from '@/Components';
import useAlert from '@/Hooks/useAlert';

export default function () {
  const {setToken} = useAuth();
  const {Metrics} = useTheme();
  const {showAlert} = useAlert();

  function onPressShowAlert() {
    showAlert('tou have presed on button show alert');
  }

  const ConteinerHeader = <Button onPress={() => setToken(null)}>sair</Button>;

  return (
    <ContainerScreen Header={ConteinerHeader}>
      <Button onPress={onPressShowAlert}>show alert</Button>
    </ContainerScreen>
  );
}
