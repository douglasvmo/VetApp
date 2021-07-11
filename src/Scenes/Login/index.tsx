import React from 'react';
import {View, Text, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import {Button, TextinputAnimated} from '@/Components';
import {useAuth} from '@/Hooks';
import {useStyle} from './styles';

export default function () {
  const style = useStyle();
  const {setToken} = useAuth();

  return (
    <KeyboardAvoidingView behavior="position" style={style.container}>
      <View style={style.logoWrapper}>
        <Text>Login</Text>
      </View>
      <View style={style.loginWrapper}>
        <TextinputAnimated label="Login" border borderColor="gray" />
        <TextinputAnimated
          label="Senha"
          border
          borderColor="gray"
          secureTextEntry
        />
        <TouchableOpacity style={style.button} onPress={() => setToken('ok')}>
          <Text style={style.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
