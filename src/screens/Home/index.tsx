import React, { useCallback, useEffect, useState } from 'react';
import { Text, Alert, TouchableOpacity } from 'react-native';

import api from '../../services/axios';
import colors from '../../styles/colors';

import { Container } from './styles';
import { IWeatherDTO } from '../../dtos/IWeatherDTO';
import kelvinToCelsius from '../../utils/kelvinToCelsius';
import { useLocation } from '../../hooks/useLocation';
import { useLoading } from '../../hooks/useLoading';
import { useWeather } from '../../hooks/useWeather';

const Home: React.FC = () => {
  const { location, loadLocation } = useLocation();
  const { loading } = useLoading();
  const { loadWeather, weather } = useWeather();

  useEffect(() => {
    loadLocation();
  }, []);

  useEffect(() => {
    loadWeather(location);
  }, [location, loadWeather]);

  return (
    <Container>
      <Text style={{ color: colors.black }}>Weather App</Text>
      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        !!weather && (
          <>
            <Text style={{ color: colors.black }}>
              lat: {location?.coords.latitude}
            </Text>
            <Text style={{ color: colors.black }}>
              long: {location?.coords.longitude}
            </Text>

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
            <TouchableOpacity onPress={() => loadWeather(location)}>
              <Text>Atualizar</Text>
            </TouchableOpacity>
          </>
        )
      )}
    </Container>
  );
};

export default Home;
