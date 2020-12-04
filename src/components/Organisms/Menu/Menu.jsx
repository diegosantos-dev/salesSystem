import React from 'react';
import Logo from 'components/Molecules/Logo';
import { Container, MenuItems, ItemsMenu } from './style';

const Menu = () => {
  return (
    <Container>
      <Logo />
      <MenuItems>
        <li>Dashboards</li>
        <li>Clientes</li>
        <li>Realizar Pedidos </li>
        <li>Produtos</li>
      </MenuItems>
    </Container>
  );
};
export default Menu;
