import React from 'react';
import Menu from 'components/Organisms/Menu';
import Header from 'components/Organisms/Header';

import Main from 'components/Organisms/Main';

import { Container, ContainerMain } from './style';

const GridLayout = ({ children }) => {
  return (
    <Container>
      <Menu />
      <ContainerMain>
        <Header />
        <Main>{children}</Main>
      </ContainerMain>
    </Container>
  );
};

export default GridLayout;
