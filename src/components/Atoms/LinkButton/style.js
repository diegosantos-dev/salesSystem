import styled from 'styled-components';
import { scale } from 'assets/utils/modular-scale';
import theme from 'assets/styles/theme';

export const ContainerButton = styled.div`
  width: 17%;
  display: flex;
  place-content: flex-end;
  place-items: center;
  margin-bottom: 25px;

  a {
    padding: ${scale.ms4};
    text-decoration: none;
    color: inherit;
    background: ${theme.color.colorQuinary};
    border-radius: ${scale.ms3};
    transition: 0.3s ease-in-out;
    :hover {
      background: ${theme.color.colorTertiary};
      cursor: pointer;
    }
  }
`;
