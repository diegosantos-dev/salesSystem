import styled from 'styled-components';
import theme from 'assets/styles/theme';
import AvatarUserMock from 'static/images/avatarUserMock.jpg';

export const AvatarStyleMock = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${AvatarUserMock});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100%;
  border: 2px solid ${theme.color.colorSecondary};
`;
