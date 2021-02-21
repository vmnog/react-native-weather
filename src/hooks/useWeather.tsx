import { GeolocationResponse } from '@react-native-community/geolocation';
import React, { createContext, useContext, useCallback, useState } from 'react';

import { Alert } from 'react-native';
import { IWeatherDTO } from '../dtos/IWeatherDTO';

import api from '../services/axios';
import { useLoading } from './useLoading';

interface WeatherContextData {
  weather: IWeatherDTO | undefined;
  loadWeather: (location: GeolocationResponse) => Promise<void>;
}

const WeatherContext = createContext<WeatherContextData>(
  {} as WeatherContextData
);

export const WeatherProvider: React.FC = ({ children }) => {
  const [weather, setWeather] = useState<IWeatherDTO>();
  const { setLoading } = useLoading();

  const loadWeather = useCallback(
    async (location) => {
      if (!location) return;

      try {
        setLoading(true);

        const { data } = await api.get('weather', {
          params: {
            lat: location!.coords.latitude,
            lon: location!.coords.longitude,
          },
        });

        setWeather(data);
        setLoading(false);
      } catch (err) {
        Alert.alert(
          '😥 Erro ao carregar o clima',
          'Por favor verifique sua conexão com a internet ou tente novamente mais tarde'
        );
      }
    },
    [setWeather]
  );

  return (
    <WeatherContext.Provider
      value={{
        weather,
        loadWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = (): WeatherContextData => {
  return useContext(WeatherContext);
};
