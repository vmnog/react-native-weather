import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { spacing } from '../../styles/global';

export const Container = styled.View`
  display: flex;
  align-items: center;

  flex: 1;

  padding: 0 ${spacing.medium};
`;

export const Location = styled.Text`
  font-size: 40px;
  font-weight: bold;

  color: ${colors.white};
`;

export const Description = styled.Text`
  font-size: 28px;
  font-weight: bold;

  color: ${colors.white};
  opacity: 0.6;

  text-transform: capitalize;
`;

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

export const SecondaryContainer = styled.View`
  margin-top: ${spacing.medium};

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 100%;
`;

export const SecondaryInfo = styled.View`
  align-items: center;
`;

export const SecondaryInfoTitle = styled.Text`
  color: ${colors.white};
  font-size: 16px;

  opacity: 0.6;
`;

export const SecondaryInfoValue = styled.Text`
  color: ${colors.white};
  font-size: 18px;
`;

export const CurrentDate = styled.Text`
  margin-top: auto;

  color: ${colors.white};
  font-size: 16px;

  text-transform: capitalize;

  opacity: 0.8;
`;
