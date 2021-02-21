import React, { useCallback, useEffect, useState } from 'react';
import { Text } from 'react-native';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';

import api from '../../services/axios';
import colors from '../../styles/colors';

import { Container } from './styles';
import { IWeatherDTO } from '../../dtos/IWeatherDTO';
import kelvinToCelsius from '../../utils/kelvinToCelsius';

const Home: React.FC = () => {
  const [location, setLocation] = useState<GeolocationResponse>();
  const [weather, setWeather] = useState<IWeatherDTO>();

  // -23.6096, -46.7260 minha casa

  useEffect(() => {
    loadLocation();
  }, []);

  useEffect(() => {
    loadWeather();
  }, [location]);

  const loadLocation = useCallback(() => {
    try {
      Geolocation.getCurrentPosition((location) => setLocation(location));
    } catch (err) {
      console.log('Erro ao carregar localização: ', err);
    }
  }, [Geolocation, setLocation]);

  const loadWeather = useCallback(async () => {
    try {
      const { data } = await api.get('weather', {
        params: {
          lat: '-23.6096',
          lon: '-46.7260',
        },
        // params: {
        //   lat: location!.coords.latitude,
        //   lon: location!.coords.longitude,
        // },
      });

      setWeather(data);
    } catch (err) {
      console.log('Erro ao carregar clima: ', err);
    }
  }, [setWeather]);

  return (
    <Container>
      <Text style={{ color: colors.black }}>Weather App</Text>
      {!!location && (
        <>
          <Text style={{ color: colors.black }}>
            lat: {location?.coords.latitude}
          </Text>
          <Text style={{ color: colors.black }}>
            long: {location?.coords.longitude}
          </Text>
        </>
      )}
      {!!weather && (
        <>
          <Text style={{ color: colors.black }}>
            clima: {weather.weather[0].description}
          </Text>
          <Text style={{ color: colors.black }}>região: {weather.name}</Text>
          <Text style={{ color: colors.black }}>
            vento: {weather.wind.speed} m/s
          </Text>
          <Text style={{ color: colors.black }}>
            nuvems: {weather.clouds.all}%
          </Text>
          <Text style={{ color: colors.black }}>
            temperatura: {kelvinToCelsius(weather.main.temp)}
          </Text>
          <Text style={{ color: colors.black }}>
            sensação termica: {kelvinToCelsius(weather.main.feels_like)}
          </Text>
          <Text style={{ color: colors.black }}>
            temp. min.: {kelvinToCelsius(weather.main.temp_min)}
          </Text>
          <Text style={{ color: colors.black }}>
            temp. max.: {kelvinToCelsius(weather.main.temp_max)}
          </Text>
          <Text style={{ color: colors.black }}>
            humidade: {weather.main.humidity}%
          </Text>
        </>
      )}
    </Container>
  );
};

export default Home;
