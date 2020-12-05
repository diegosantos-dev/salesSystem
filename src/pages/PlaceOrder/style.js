import styled from 'styled-components';
import { scale } from 'assets/utils/modular-scale';

export const ContainerCardDashboard = styled.div`
  margin-top: ${({ marginTop }) => `${marginTop}px`};
  div:nth-child(2) {
    margin-left: ${scale.ms6};
    margin-right: ${scale.ms6};
  }
`;
