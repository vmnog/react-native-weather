import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { spacing } from '../../styles/global';
import * as Animatable from 'react-native-animatable';
import { Platform } from 'react-native';

export const Scrollable = styled.ScrollView`
  margin-top: ${spacing.medium};
`;

export const Container = styled(Animatable.View)`
  display: flex;
  align-items: center;

  flex: 1;

  padding: 0 ${spacing.medium};

  padding-top: ${Platform.OS === 'ios' ? spacing.large : 0};
`;

export const CurrentDate = styled(Animatable.Text)`
  margin-top: ${spacing.small};

  color: ${colors.white};
  font-size: 16px;

  text-transform: capitalize;

  opacity: 0.8;
`;

export const ReloadContainer = styled.View`
  align-items: center;
  margin-top: ${spacing.medium};
`;
