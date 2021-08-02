import styled from 'styled-components';
import {Text, View} from 'react-native';

export const AlertContainer = styled(View)`
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 50px 20px;
  z-index: 5;
  background-color: ${({theme}) => theme.Colors.white + "E6"};
  justify-content: center;
`;

export const Title = styled(Text)`
  font-size: 16px;
`;
