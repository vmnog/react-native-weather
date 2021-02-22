import React from 'react';

import { IWeatherDTO } from '../../dtos/IWeatherDTO';

import { Location, Description } from './styles';

interface Props {
  weather: IWeatherDTO;
}

const UserLocation: React.FC<Props> = ({ weather }) => {
  return (
    <>
      <Location>{weather.name}</Location>
      <Description>{weather.weather[0].description}</Description>
    </>
  );
};

export default UserLocation;
