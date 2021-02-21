import React from 'react';
import { StatusBar } from 'react-native';

import Home from './screens/Home';

import colors from './styles/colors';
import SafeArea from './components/SafeArea';

import { LoadingProvider } from './hooks/useLoading';
import { LocationProvider } from './hooks/useLocation';
import { WeatherProvider } from './hooks/useWeather';

const App: React.FC = () => {
  return (
    <LoadingProvider>
      <LocationProvider>
        <WeatherProvider>
          <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
          <SafeArea>
            <Home />
          </SafeArea>
        </WeatherProvider>
      </LocationProvider>
    </LoadingProvider>
  );
};

export default App;
