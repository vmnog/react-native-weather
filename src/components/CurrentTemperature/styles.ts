import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { spacing } from '../../styles/global';

export const Temperature = styled.View`
  margin-top: ${spacing.medium};
  flex-direction: row;
`;
export const TemperatureValue = styled.Text`
  font-size: 150px;
  font-weight: bold;

  color: ${colors.white};

  opacity: 0.9;

  letter-spacing: -10px;
`;
export const TemperatureSymbol = styled.Text`
  font-size: 60px;
  font-weight: bold;

  color: ${colors.white};

  margin-top: 30px;

  opacity: 0.9;

  letter-spacing: 0px;
`;
