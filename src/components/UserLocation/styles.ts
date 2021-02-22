import styled from 'styled-components/native';
import colors from '../../styles/colors';

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
