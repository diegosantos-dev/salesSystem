import styled from 'styled-components';
import theme from 'assets/styles/theme';
import { scale } from 'assets/utils/modular-scale';

export const Container = styled.div`
  background-color: ${theme.color.colorQuinary};
  border-radius: 20px;
  padding: ${scale.ms6};
  ${({ marginTop }) => marginTop && `margin-top:${marginTop}px`};
  ${({ center }) => center && `display:grid;place-content: center;`}
  h1 {
    font-family: 'PoppinsBlack', sans-serif;
    margin-bottom: ${scale.ms6};
  }
  ul {
    list-style: none;
    li {
      padding-bottom: ${scale.ms6};
      padding-top: ${scale.ms6};
      border-bottom: 1px solid ${theme.color.colorPrimary};
    }
  }
`;

export const Number = styled.div`
  font-size: 100px;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
    180deg,
    ${theme.color.colorQuinary},
    ${theme.color.colorTertiary}
  );
`;
