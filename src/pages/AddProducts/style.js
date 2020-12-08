import styled from 'styled-components';
import { scale } from 'assets/utils/modular-scale';

export const ContainerCardDashboard = styled.div`
  margin-top: ${({ marginTop }) => `${marginTop}px`};
`;

export const ContainerButton = styled.div`
  display: flex;
  place-content: flex-end;
  margin-top: 15px;
`;
