import React from 'react';
import {Text} from 'react-native';
import {Button, TextinputAnimated} from '@/Components';
import {useAuth} from '@/Hooks';
import * as S from './styles';

export default function () {
  const {setToken} = useAuth();

  return (
    <S.KeyboardAvoidingContainer>
      <S.LogoWrapper></S.LogoWrapper>
      <S.LoginWrapper>
        <TextinputAnimated label="Login" border borderColor="gray" />
        <TextinputAnimated
          label="Senha"
          border
          borderColor="gray"
          secureTextEntry
        />
        <S.Link>
          <S.LinkText>Esqueci minha senha</S.LinkText>
        </S.Link>
        <S.ButtonLogin onPress={() => setToken('ok')}>
          <S.ButtonText>Entrar</S.ButtonText>
        </S.ButtonLogin>
        <S.GoogleButton onPress={() => setToken('ok')}>
          <S.WrapperAlign>
            <S.GoogleIcon />
            <S.SocialText>Login com Google</S.SocialText>
          </S.WrapperAlign>
        </S.GoogleButton>
        <S.FacebookButton onPress={() => setToken('ok')}>
          <S.WrapperAlign>
            <S.FacebookIcon />
            <S.SocialText>Login com Facebook</S.SocialText>
          </S.WrapperAlign>
        </S.FacebookButton>
        <S.RegisterLink>
          <S.LinkText>Não tem uma conta? Registre</S.LinkText>
        </S.RegisterLink>
      </S.LoginWrapper>
    </S.KeyboardAvoidingContainer>
  );
}
