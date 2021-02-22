import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { spacing } from '../../styles/global';

export const Container = styled.View`
  display: flex;
  align-items: center;

  flex: 1;

  padding: 0 ${spacing.medium};
`;

export const CurrentDate = styled.Text`
  margin-top: auto;

  color: ${colors.white};
  font-size: 16px;

  text-transform: capitalize;

  opacity: 0.8;
`;
