import React from 'react';
import GridLayout from 'components/Templates/GridLayout';
import { CardList } from 'components/Organisms/Card';
import { TitlePage } from 'components/Atoms/Title';

import { ContainerCardDashboard } from './style';

const Clients = () => {
  return (
    <GridLayout>
      <TitlePage>Clientes</TitlePage>
      <ContainerCardDashboard>
        <CardList title="Clientes" />
        <CardList title="Produtos" />
        <CardList title="Pedidos" />
      </ContainerCardDashboard>
    </GridLayout>
  );
};

export default Clients;
