import React from 'react';
import Menu from 'components/Organisms/Menu';
import Header from 'components/Organisms/Header';
import Main from '../Main';

import { Container, ContainerMain } from './style';

const Dashboard = () => {
  return (
    <Container>
      <Menu />
      <ContainerMain>
        <Header />
        <Main>body</Main>
      </ContainerMain>
    </Container>
  );
};

export default Dashboard;
