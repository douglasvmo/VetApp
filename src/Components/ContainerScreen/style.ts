import {View, Text} from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  flex: 1;
  justify-content: flex-end;
  background-color: ${({theme}) => theme.Colors.white};
`;

export const HeaderWrapper = styled(View)`
  flex: 1;
  justify-content: center;
  padding-bottom: 100px;
  margin-bottom: -100px;
  padding-top: ${({theme})=> theme.Metrics.statusBarHeight}px;
  background-color: ${({theme}) => theme.Colors.primary};
  z-index: -2;
`;

export const HomeWrapper = styled(View)`
  height: 90%;
  border-top-left-radius: 100px;
  justify-content: center;
  background-color: ${({theme}) => theme.Colors.white};
  padding: 0 10px;
`;
