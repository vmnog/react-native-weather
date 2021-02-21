import styled from 'styled-components/native';
import colors from '../../styles/colors';

const SafeArea = styled.SafeAreaView`
  display: flex;
  flex-direction: column;

  flex: 1;
  
  background: ${colors.black}; // esta cor irá mudar quando o usuario estiver logado
`;

export default SafeArea;
