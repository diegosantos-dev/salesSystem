import styled from 'styled-components';
import theme from 'assets/styles/theme';
import { scale } from 'assets/utils/modular-scale';

export const WelcomeUser = styled.div`
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
    90deg,
    ${theme.color.colorSecondary},
    ${theme.color.colorTertiary}
  );
  font-size: ${theme.fontSize.primary};
  font-family: 'PoppinsLight', sans-serif;
  margin-bottom: ${scale.ms9};
  strong {
    font-family: 'PoppinsBlack', sans-serif;
  }
`;
