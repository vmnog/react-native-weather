import React from 'react';

import { IWeatherDTO } from '../../dtos/IWeatherDTO';
import kelvinToCelsius from '../../utils/kelvinToCelsius';

import { Temperature, TemperatureValue, TemperatureSymbol } from './styles';

import * as Animatable from 'react-native-animatable';

interface Props {
  weather: IWeatherDTO;
}

const CurrentTemperature: React.FC<Props> = ({ weather }) => {
  return (
    <Animatable.View animation="bounceIn" easing="ease-in-out">
      <Temperature>
        <TemperatureValue>
          {kelvinToCelsius(weather.main.temp)}
        </TemperatureValue>
        <TemperatureSymbol>ºC</TemperatureSymbol>
      </Temperature>
    </Animatable.View>
  );
};

export default CurrentTemperature;
