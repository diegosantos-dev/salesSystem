import styled from 'styled-components';
import theme from 'assets/styles/theme';
import { scale } from 'assets/utils/modular-scale';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  border-right: 1px solid ${theme.color.colorQuinary};
  height: 100vh;
  padding: ${scale.ms4};
  img {
    margin-bottom: 160px;
  }
`;
export const MenuItems = styled.ul`
  list-style: none;
  width: 100%;
  a {
    width: 100%;
    text-decoration: none;
    color: inherit;
  }
`;

export const Li = styled.li`
  margin-bottom: ${scale.ms9};
  background: ${theme.color.colorQuinary};
  border-radius: 8px;
  padding: ${scale.ms4};
  animation: 0.3s ease-in;
  ${({ actived }) =>
    actived
      ? `background: linear-gradient(
      40deg,
      ${theme.color.colorSecondary} 1%,
      ${theme.color.colorQuinary} 40%
    );`
      : ''}
  :hover {
    background: linear-gradient(
      40deg,
      ${theme.color.colorSecondary} 1%,
      ${theme.color.colorQuinary} 40%
    );
    cursor: pointer;
  }
`;
