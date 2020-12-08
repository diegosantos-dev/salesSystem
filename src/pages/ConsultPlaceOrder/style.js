import styled from 'styled-components';
import { scale } from 'assets/utils/modular-scale';

export const ContainerCardDashboard = styled.div`
  margin-top: ${({ marginTop }) => `${marginTop}px`};
`;

export const Table = styled.table`
  width: 100%;
  th {
    padding: ${scale.ms3};
    width: 33%;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  td {
    padding: 12px;
    width: 33%;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
`;
