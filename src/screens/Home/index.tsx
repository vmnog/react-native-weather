import React, { useEffect, useState } from 'react';
import { Alert, RefreshControl, ScrollView } from 'react-native';
import { format } from 'date-fns';

import { Container, CurrentDate, ReloadContainer } from './styles';

import { useLocation } from '../../hooks/useLocation';
import { useLoading } from '../../hooks/useLoading';
import { useWeather } from '../../hooks/useWeather';

import { pt } from 'date-fns/locale';

import UserLocation from '../../components/UserLocation';
import CurrentTemperature from '../../components/CurrentTemperature';
import SecondaryData from '../../components/SecondaryData';
import ReloadButton from '../../components/ReloadButton';

const Home: React.FC = () => {
  const [hasErrors, setHasErrors] = useState(true);
  const { location, loadLocation } = useLocation();
  const { loading, setLoading } = useLoading();
  const { loadWeather, weather } = useWeather();

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
    <ScrollView
      style={{
        marginTop: 40
      }}
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
        {!loading && hasErrors && <ReloadButton onReload={() => loadWeather(location)}/>}
      </ReloadContainer>

    </ScrollView>
  );
};

export default Home;
