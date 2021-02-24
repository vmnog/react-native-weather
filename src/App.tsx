import React from 'react';
import { Alert, SafeAreaView, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Home from './screens/Home';

import colors from './styles/colors';

import { LoadingProvider } from './hooks/useLoading';
import { LocationProvider } from './hooks/useLocation';
import { WeatherProvider } from './hooks/useWeather';
import { ErrorsProvider } from './hooks/useErrors';

const App: React.FC = () => {

  Alert.alert('💡 Dica!', 'Arraste para baixo ⬇ para recarregar as informações climáticas')

  return (
    <ErrorsProvider>
      <LoadingProvider>
        <LocationProvider>
          <WeatherProvider>
            <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
              <LinearGradient
                colors={[colors.blue, colors.purple, colors.darkpurple]}
                style={{ flex: 1 }}
                >
                <Home />
              </LinearGradient>
          </WeatherProvider>
        </LocationProvider>
      </LoadingProvider>
    </ErrorsProvider>
  );
};

export default App;
