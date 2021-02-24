import React, { useEffect, useState } from 'react';
import { Alert, RefreshControl, ScrollView } from 'react-native';
import { format } from 'date-fns';

import { Scrollable, Container, CurrentDate, ReloadContainer } from './styles';

import { useLocation } from '../../hooks/useLocation';
import { useLoading } from '../../hooks/useLoading';
import { useWeather } from '../../hooks/useWeather';

import { pt } from 'date-fns/locale';

import UserLocation from '../../components/UserLocation';
import CurrentTemperature from '../../components/CurrentTemperature';
import SecondaryData from '../../components/SecondaryData';
import ReloadButton from '../../components/ReloadButton';
import { useErrors } from '../../hooks/useErrors';

const Home: React.FC = () => {
  const { loading } = useLoading();
  const { hasErrors } = useErrors();
  const { loadWeather, weather } = useWeather();
  const { location, loadLocation } = useLocation();

  useEffect(() => {
    loadLocation();
  }, []);

  useEffect(() => {
    loadWeather(location);
  }, [location, loadWeather]);

  const handleRefresh = () => {
    loadWeather(location);
  };

  return (
    <Scrollable
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

      <ReloadContainer>
        {hasErrors && <ReloadButton onReload={() => loadWeather(location)} />}
      </ReloadContainer>
    </Scrollable>
  );
};

export default Home;
