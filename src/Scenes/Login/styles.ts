import {
  KeyboardAvoidingView,
  View,
  Platform,
  TouchableOpacity,
  Text,
} from 'react-native';
import styled from 'styled-components';

export const KeyboardAvoidingContainer = styled(KeyboardAvoidingView).attrs({
  behavior: Platform.OS == 'ios' ? 'position' : undefined,
})`
  flex: 1;
  justify-content: flex-end;
  background-color: ${({theme}) => theme.Colors.white};
`;

export const LoginWrapper = styled(KeyboardAvoidingView)`
  height: ${({theme}) => theme.Metrics.getHeightFromDP('80%')}px;
  border-top-left-radius: 100px;
  justify-content: center;
  background-color: ${({theme}) => theme.Colors.white};
  padding: 0 10px;
`;

export const LogoWrapper = styled(View)`
  height: 35%;
  margin-bottom: -100px;
  justify-content: center;
  background-color: ${({theme}) => theme.Colors.primary};
  z-index: -2;
`;

export const Button = styled(TouchableOpacity)`
  background-color: ${({theme}) => theme.Colors.primary};
  height: ${({theme}) => theme.Metrics.getHeightFromDP('5%')}px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 3px #b3b3b3b3;
  elevation: 10;
`;

export const ButtonText = styled(Text)`
  font-size: ${({theme})=>theme.Metrics.largeSize}px;
`;
