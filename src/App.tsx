import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Home from './screens/Home';

import colors from './styles/colors';

import { LoadingProvider } from './hooks/useLoading';
import { LocationProvider } from './hooks/useLocation';
import { WeatherProvider } from './hooks/useWeather';

const App: React.FC = () => {
  return (
    <LoadingProvider>
      <LocationProvider>
        <WeatherProvider>
          <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
          <SafeAreaView style={{ flex: 1, backgroundColor: colors.blue }}>
            <LinearGradient
              colors={[colors.blue, colors.purple, colors.darkpurple]}
              style={{ flex: 1 }}
            >
              <Home />
            </LinearGradient>
          </SafeAreaView>
          <SafeAreaView style={{ flex: 0, backgroundColor: colors.purple }} />
        </WeatherProvider>
      </LocationProvider>
    </LoadingProvider>
  );
};

export default App;
