import React from 'react';
import { GestureResponderEvent } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { Container, ButtonText } from './styles';

interface Props {
  onPress: (event: GestureResponderEvent) => void;
}

const ReloadButton: React.FC<Props> = ({ onPress }) => {
  return (
    <Animatable.View animation="fadeIn" easing="ease-in-out">
      <Container onPress={onPress}>
        <ButtonText>Recarregar</ButtonText>
      </Container>
    </Animatable.View>
  );
};

export default ReloadButton;
