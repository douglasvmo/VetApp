import React from 'react';
import {View, Text} from 'react-native';
import {useTheme, useAuth} from '@/Hooks';
import {Button} from '@/Components';

export default function () {
  const {Fonts} = useTheme();
  const {setToken} = useAuth();

  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={[Fonts.titleSmall]}>Clinica</Text>
      </View>
      <Button onPress={() => setToken(null)}>Sair</Button>
    </View>
  );
}
