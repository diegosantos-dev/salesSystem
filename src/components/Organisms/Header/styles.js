import styled from 'styled-components';
import theme from 'assets/styles/theme';

export const Container = styled.div`
  display: flex;
  place-content: flex-end;
  place-items: center;
  height: 72px;
  border-bottom: 3px solid ${theme.color.colorQuinary};
`;
