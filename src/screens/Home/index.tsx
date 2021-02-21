import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

import colors from '../../styles/colors';

const Home: React.FC = () => {
  return (
    <Container>
      <Text style={{ color: colors.white }}>Weather App</Text>
    </Container>
  );
};

export default Home;
