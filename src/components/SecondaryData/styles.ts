import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { spacing } from '../../styles/global';

import * as Animatable from 'react-native-animatable';

export const SecondaryContainer = styled(Animatable.View)`
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
