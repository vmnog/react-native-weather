import React from 'react';

import { IWeatherDTO } from '../../dtos/IWeatherDTO';
import kelvinToCelsius from '../../utils/kelvinToCelsius';

import {
  SecondaryContainer,
  SecondaryInfo,
  SecondaryInfoTitle,
  SecondaryInfoValue,
} from './styles';

interface Props {
  weather: IWeatherDTO;
}

const SecondaryData: React.FC<Props> = ({ weather }) => {
  return (
    <>
      <SecondaryContainer animation="slideInLeft" easing="ease-out">
        <SecondaryInfo>
          <SecondaryInfoTitle>Mín.</SecondaryInfoTitle>
          <SecondaryInfoValue>
            {kelvinToCelsius(weather.main.temp_min)} ºC
          </SecondaryInfoValue>
        </SecondaryInfo>
        <SecondaryInfo>
          <SecondaryInfoTitle>Máx.</SecondaryInfoTitle>
          <SecondaryInfoValue>
            {kelvinToCelsius(weather.main.temp_max)} ºC
          </SecondaryInfoValue>
        </SecondaryInfo>
      </SecondaryContainer>
      <SecondaryContainer animation="slideInRight" easing="ease-out">
        <SecondaryInfo>
          <SecondaryInfoTitle>Vento</SecondaryInfoTitle>
          <SecondaryInfoValue>{weather.wind.speed} m/s</SecondaryInfoValue>
        </SecondaryInfo>
        <SecondaryInfo>
          <SecondaryInfoTitle>Sensação</SecondaryInfoTitle>
          <SecondaryInfoValue>
            {kelvinToCelsius(weather.main.feels_like)} ºC
          </SecondaryInfoValue>
        </SecondaryInfo>
      </SecondaryContainer>
      <SecondaryContainer
        style={{ marginBottom: 40 }}
        animation="slideInLeft"
        easing="ease-out"
      >
        <SecondaryInfo>
          <SecondaryInfoTitle>Nuvems</SecondaryInfoTitle>
          <SecondaryInfoValue>{weather.clouds.all}%</SecondaryInfoValue>
        </SecondaryInfo>
        <SecondaryInfo>
          <SecondaryInfoTitle>Humidade</SecondaryInfoTitle>
          <SecondaryInfoValue>{weather.main.humidity}%</SecondaryInfoValue>
        </SecondaryInfo>
      </SecondaryContainer>
    </>
  );
};

export default SecondaryData;
