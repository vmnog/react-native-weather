import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { fontsize, spacing } from '../../styles/global';

export const Container = styled.View`
  display: flex;
  flex-direction: column;

  flex: 1;

  padding: ${spacing.small};
`;
