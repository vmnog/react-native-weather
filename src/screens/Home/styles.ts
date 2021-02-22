import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { spacing } from '../../styles/global';
import * as Animatable from 'react-native-animatable';

export const Container = styled(Animatable.View)`
  display: flex;
  align-items: center;

  flex: 1;

  padding: 0 ${spacing.medium};

  margin-top: ${spacing.small};
`;

export const CurrentDate = styled(Animatable.Text)`
  margin-top: ${spacing.small};

  color: ${colors.white};
  font-size: 16px;

  text-transform: capitalize;

  opacity: 0.8;
`;
