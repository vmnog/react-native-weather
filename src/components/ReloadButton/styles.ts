import { Platform } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.TouchableOpacity`
  align-items: center;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 18px;
  margin-top: ${Platform.OS === 'ios' ? '20px' : '60px'};
`;

export const ButtonText = styled.Text`
  padding: 20px 35px;
  color: ${colors.white};
`;
