import React from 'react';

import { IWeatherDTO } from '../../dtos/IWeatherDTO';
import kelvinToCelsius from '../../utils/kelvinToCelsius';

import { Temperature, TemperatureValue, TemperatureSymbol } from './styles';

interface Props {
  weather: IWeatherDTO;
}

const CurrentTemperature: React.FC<Props> = ({ weather }) => {
  return (
    <>
      <Temperature>
        <TemperatureValue>
          {kelvinToCelsius(weather.main.temp)}
        </TemperatureValue>
        <TemperatureSymbol>ºC</TemperatureSymbol>
      </Temperature>
    </>
  );
};

export default CurrentTemperature;
