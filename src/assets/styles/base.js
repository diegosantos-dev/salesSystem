import PoppinsBlack from 'assets/fonts/Poppins-Black.ttf';
import PoppinsLight from 'assets/fonts/Poppins-Light.ttf';
import PoppinsRegular from 'assets/fonts/Poppins-Regular.ttf';

import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import { size } from '../utils/breakpoint';

export default createGlobalStyle`

@font-face {
     font-family: 'PoppinsBlack';
     font-display: block;
     src: url('${PoppinsBlack}') format('opentype');
   }
   @font-face {
     font-family: 'PoppinsLight';
     font-display: block;
     src: url('${PoppinsLight}') format('opentype');
   }
   @font-face {
     font-family: 'PoppinsRegular';
     font-display: block;
     src: url('${PoppinsRegular}') format('opentype');
   }

  *{
    margin: 0;
    padding: 0;
    outline: none !important;
    box-sizing: border-box;
  }
html,
body {
  background: ${theme.color.colorPrimary};
  font-family: "PoppinsRegular", sans-serif;
  font-size:${theme.fontSize.quinary};
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
