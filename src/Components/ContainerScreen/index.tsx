import React from 'react';
import {ViewProps} from 'react-native';
import {Container, HeaderWrapper, HomeWrapper} from './style';

interface ContainerScreenProps extends ViewProps {
  Header?: React.ReactNode;
}

export const ContainerScreen: React.FC<ContainerScreenProps> = props => {
  return (
    <Container>
      <HeaderWrapper>{props.Header}</HeaderWrapper>
      <HomeWrapper>{props.children}</HomeWrapper>
    </Container>
  );
};
