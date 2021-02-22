import React, { useEffect } from 'react';
import { ToastAndroid, RefreshControl, ScrollView } from 'react-native';
import { format } from 'date-fns';

import {
  Container,
  Location,
  Description,
  Temperature,
  TemperatureValue,
  TemperatureSymbol,
  SecondaryContainer,
  SecondaryInfo,
  CurrentDate,
  SecondaryInfoTitle,
  SecondaryInfoValue,
} from './styles';

import { useLocation } from '../../hooks/useLocation';
import { useLoading } from '../../hooks/useLoading';
import { useWeather } from '../../hooks/useWeather';

import kelvinToCelsius from '../../utils/kelvinToCelsius';
import { pt } from 'date-fns/locale';

const Home: React.FC = () => {
  const { location, loadLocation } = useLocation();
  const { loading } = useLoading();
  const { loadWeather, weather } = useWeather();

  useEffect(() => {
    loadLocation();

    showToast();
  }, []);

  useEffect(() => {
    loadWeather(location);
  }, [location, loadWeather]);

  const handleRefresh = () => {
    loadWeather(location);
  };

  const showToast = () => {
    ToastAndroid.show('Arraste para baixo para atualizar', ToastAndroid.TOP);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={handleRefresh} />
      }
    >
      <Container>
        {!!weather && !loading && (
          <>
            <Location>{weather.name}</Location>
            <Description>{weather.weather[0].description}</Description>
            <Temperature>
              <TemperatureValue>
                {kelvinToCelsius(weather.main.temp)}
              </TemperatureValue>
              <TemperatureSymbol>ºC</TemperatureSymbol>
            </Temperature>
            <SecondaryContainer>
              <SecondaryInfo>
                <SecondaryInfoTitle>Mín.</SecondaryInfoTitle>
                <SecondaryInfoValue>
                  {kelvinToCelsius(weather.main.temp_min)} ºC
                </SecondaryInfoValue>
              </SecondaryInfo>
              <SecondaryInfo>
                <SecondaryInfoTitle>Máx.</SecondaryInfoTitle>
                <SecondaryInfoValue>
                  {kelvinToCelsius(weather.main.temp_max)} ºC
                </SecondaryInfoValue>
              </SecondaryInfo>
            </SecondaryContainer>
            <SecondaryContainer>
              <SecondaryInfo>
                <SecondaryInfoTitle>Vento</SecondaryInfoTitle>
                <SecondaryInfoValue>
                  {weather.wind.speed} m/s
                </SecondaryInfoValue>
              </SecondaryInfo>
              <SecondaryInfo>
                <SecondaryInfoTitle>Sensação</SecondaryInfoTitle>
                <SecondaryInfoValue>
                  {kelvinToCelsius(weather.main.feels_like)} ºC
                </SecondaryInfoValue>
              </SecondaryInfo>
            </SecondaryContainer>
            <SecondaryContainer style={{ marginBottom: 40 }}>
              <SecondaryInfo>
                <SecondaryInfoTitle>Nuvems</SecondaryInfoTitle>
                <SecondaryInfoValue>{weather.clouds.all}%</SecondaryInfoValue>
              </SecondaryInfo>
              <SecondaryInfo>
                <SecondaryInfoTitle>Humidade</SecondaryInfoTitle>
                <SecondaryInfoValue>
                  {weather.main.humidity}%
                </SecondaryInfoValue>
              </SecondaryInfo>
            </SecondaryContainer>

            <CurrentDate>
              {format(location.timestamp, `cccc, d LLLL`, { locale: pt })}
            </CurrentDate>

            {/* <Text style={{ color: colors.black }}>
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
            </TouchableOpacity> */}
          </>
        )}
      </Container>
    </ScrollView>
  );
};

export default Home;
