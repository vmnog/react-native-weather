import React from 'react';
import { GestureResponderEvent } from 'react-native';

import { Container, ButtonText } from './styles';
import * as Animatable from 'react-native-animatable';

interface Props {
  onReload: (event: GestureResponderEvent) => void;
}

const ReloadButton: React.FC<Props> = ({ onReload }) => {
  return (
    <Animatable.View animation="fadeIn" easing="ease-in" iterationDelay={1000}>
      <Container onPress={onReload}>
        <ButtonText>Recarregar</ButtonText>
      </Container>
    </Animatable.View>
  );
};

export default ReloadButton;
