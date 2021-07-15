import React from 'react';
import {Text} from 'react-native';
import {Button, TextinputAnimated} from '@/Components';
import {useAuth} from '@/Hooks';
import * as S from './styles';

export default function () {
  const {setToken} = useAuth();

  return (
    <S.KeyboardAvoidingContainer>
      <S.LogoWrapper>
        <Text>Login</Text>
      </S.LogoWrapper>
      <S.LoginWrapper>
        <TextinputAnimated label="Login" border borderColor="gray" />
        <TextinputAnimated
          label="Senha"
          border
          borderColor="gray"
          secureTextEntry
        />
        <S.Button onPress={() => setToken('ok')}>
          <S.ButtonText>Entrar</S.ButtonText>
        </S.Button>
      </S.LoginWrapper>
    </S.KeyboardAvoidingContainer>
  );
}
