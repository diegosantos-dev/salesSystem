import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import { size } from '../utils/breakpoint';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none !important;
    box-sizing: border-box;
  }
html,
body {
  background: ${theme.color.colorPrimary};
  width: 100%;
  height: 100%;
  margin: 0;
}
#root {
    height: 100%;
    max-width: ${size.desktopL};
    margin:0 auto;
    color: ${theme.color.colorQuaternary};
  }
`;
