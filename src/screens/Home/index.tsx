import React, { useEffect } from 'react';
import { ToastAndroid, RefreshControl, ScrollView } from 'react-native';
import { format } from 'date-fns';

import { Container, CurrentDate } from './styles';

import { useLocation } from '../../hooks/useLocation';
import { useLoading } from '../../hooks/useLoading';
import { useWeather } from '../../hooks/useWeather';

import { pt } from 'date-fns/locale';
import UserLocation from '../../components/UserLocation';
import CurrentTemperature from '../../components/CurrentTemperature';
import SecondaryData from '../../components/SecondaryData';

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
      {!!weather && !loading && (
        <Container animation="fadeIn" easing="ease-in">
          <UserLocation weather={weather} />
          <CurrentTemperature weather={weather} />
          <SecondaryData weather={weather} />

          <CurrentDate animation="fadeInUp" easing="ease-in-out">
            {format(location.timestamp, `cccc, d LLLL`, { locale: pt })}
          </CurrentDate>
        </Container>
      )}
    </ScrollView>
  );
};

export default Home;
