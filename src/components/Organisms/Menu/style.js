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
  li {
    margin-bottom: ${scale.ms9};
    font-size: ${theme.fontSize.quaternary};
    background: ${theme.color.colorQuinary};
    border-radius: 8px;
    padding: ${scale.ms4};
    animation: 0.3s ease-in;
    :hover {
      background: linear-gradient(
        40deg,
        ${theme.color.colorSecondary} 1%,
        ${theme.color.colorQuinary} 40%
      );
      cursor: pointer;
    }
  }
`;

export const ItemsMenu = styled.li``;
