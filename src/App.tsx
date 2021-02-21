import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import SafeArea from './components/SafeArea';

import Home from './screens/Home';
import colors from './styles/colors';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <SafeArea>
        <Home />
      </SafeArea>
    </>
  );
};

export default App;
