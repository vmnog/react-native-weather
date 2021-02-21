import React from 'react';
import { StatusBar } from 'react-native';

import SafeArea from './components/SafeArea';

import Home from './screens/Home';
import colors from './styles/colors';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor={colors.black} />
    <SafeArea>
      <Home />
    </SafeArea>
  </>
);

export default App;
