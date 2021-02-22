import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { spacing } from '../../styles/global';

export const Container = styled.TouchableOpacity`
  margin-top: ${spacing.medium};
  flex-direction: row;

  background: rgba(106, 173, 239, 0.3);

  padding: 10px 35px;

  border-radius: 16px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: ${colors.white};
`;
