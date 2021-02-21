import React, { useCallback, useEffect, useState } from 'react';
import { Text } from 'react-native';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';

import { Container } from './styles';

import colors from '../../styles/colors';

const Home: React.FC = () => {
  const [location, setLocation] = useState<GeolocationResponse>();

  // -23.6096, -46.7260 minha casa

  useEffect(() => {
    loadLocation();
  }, []);

  const loadLocation = useCallback(() => {
    try {
      Geolocation.getCurrentPosition((location) => setLocation(location));
    } catch (err) {
      console.log('Erro ao carregar localização: ', err);
    }
  }, [Geolocation, setLocation]);

  return (
    <Container>
      <Text style={{ color: colors.black }}>Weather App</Text>
      <Text style={{ color: colors.black }}>
        lat: {location?.coords.latitude}
      </Text>
      <Text style={{ color: colors.black }}>
        lat: {location?.coords.longitude}
      </Text>
    </Container>
  );
};

export default Home;
