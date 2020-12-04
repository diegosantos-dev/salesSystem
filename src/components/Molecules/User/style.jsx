import styled from 'styled-components';
import { scale } from 'assets/utils/modular-scale';

export const Container = styled.div`
  display: flex;
  place-content: center;
  place-items: center;
  span {
    margin-left: ${scale.ms4};
  }
`;
