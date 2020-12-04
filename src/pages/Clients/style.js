import styled from 'styled-components';
import { scale } from 'assets/utils/modular-scale';

export const ContainerCardDashboard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(33%, 1fr));
  margin-top: ${({ marginTop }) => `${marginTop}px`};
  div:nth-child(2) {
    margin-left: ${scale.ms6};
    margin-right: ${scale.ms6};
  }
`;
