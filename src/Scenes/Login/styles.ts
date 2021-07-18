import {
  KeyboardAvoidingView,
  View,
  Platform,
  TouchableOpacity,
  Text,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components';

FontAwesome.loadFont();

export const KeyboardAvoidingContainer = styled(KeyboardAvoidingView).attrs({
  behavior: Platform.OS == 'ios' ? 'padding' : 'padding',
})`
  flex: 1;
  justify-content: flex-start;
  background-color: ${({theme}) => theme.Colors.white};
`;

export const LoginWrapper = styled(KeyboardAvoidingView)`
  height: ${({theme}) => theme.Metrics.getHeightFromDP('80%')}px;
  border-top-left-radius: 90px;
  justify-content: center;
  background-color: ${({theme}) => theme.Colors.white};
  padding: 0 10px;
`;

export const LogoWrapper = styled(View)`
  height: 35%;
  margin-bottom: -100px;
  background-color: ${({theme}) => theme.Colors.primary};
  z-index: -2;
`;

export const ButtonLogin = styled(TouchableOpacity)`
  background-color: ${({theme}) => theme.Colors.primary};
  height: ${({theme}) => theme.Metrics.getHeightFromDP('6%')}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0px 1px 3px #414041;
  elevation: 6;
`;

export const GoogleButton = styled(ButtonLogin)`
  background-color: ${({theme}) => theme.Colors.gray};
  margin: 5px 0;
`;

export const FacebookButton = styled(ButtonLogin)`
  background-color: ${({theme}) => theme.Colors.gray};
  margin: 5px 0;
`;

export const SocialText = styled(Text)`
  font-size: ${({theme}) => theme.Metrics.largeSize}px;
`;

export const ButtonText = styled(Text)`
  font-size: ${({theme}) => theme.Metrics.largeSize}px;
  color: ${({theme}) => theme.Colors.white};
`;

export const Link = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  padding: 0 0 15px;
`;

export const RegisterLink = styled(Link)`
  padding: 15px 0;
  margin-bottom: -50px;
`;

export const LinkText = styled(Text)`
  font-size: ${({theme}) => theme.Metrics.largeSize}px;
`;

export const WrapperAlign = styled(View)`
  width: 55%;
  flex-direction: row;
  justify-content: space-around;
`;

export const FacebookIcon = styled(FontAwesome).attrs({
  name: 'facebook',
})`
  font-size: ${({theme}) => theme.Metrics.extraLargeSize}px;
`;

export const GoogleIcon = styled(FontAwesome).attrs({
  name: 'google',
})`
  font-size: ${({theme}) => theme.Metrics.extraLargeSize}px;
`;
