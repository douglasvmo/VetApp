import React from 'react';
import {View, Text, ViewProps, KeyboardAvoidingView} from 'react-native';
import {useTheme} from '@/Hooks';
import {TextinputAnimated} from '@/Components';

const LoginWrapper: React.FC<ViewProps> = props => {
  const {Metrics} = useTheme();

  return (
    <View
      style={[
        {
          height: Metrics.getHeightFromDP('80%'),
          borderTopLeftRadius: 140,
          justifyContent: 'center',
          backgroundColor: '#fff',
          paddingHorizontal: 10,
        },
        props.style,
      ]}>
      {props.children}
    </View>
  );
};
const LogoWrapper: React.FC<ViewProps> = props => {
  const {Metrics} = useTheme();

  return (
    <View
      {...props}
      style={[{height: Metrics.getHeightFromDP('10')}, props.style]}>
      {props.children}
    </View>
  );
};

export default function () {
  const {Fonts, Metrics} = useTheme();

  return (
    <KeyboardAvoidingView
      behavior="position"
      style={[{flex: 1, backgroundColor: 'blue'}]}>
      <View>
        <LogoWrapper>
          <Text style={[Fonts.titleRegular]}>Login</Text>
        </LogoWrapper>
        <LoginWrapper>
          <TextinputAnimated label="Login" border borderColor="gray" />
          <TextinputAnimated
            label="Senha"
            border
            borderColor="gray"
            secureTextEntry
          />
        </LoginWrapper>
      </View>
    </KeyboardAvoidingView>
  );
}
