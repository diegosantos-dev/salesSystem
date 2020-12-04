import React from 'react';
import Logo from 'components/Molecules/Logo';
import { Container, MenuItems, ItemsMenu } from './style';

const Menu = () => {
  return (
    <Container>
      <Logo />
      <MenuItems>
        <ItemsMenu>Realizar Pedidos </ItemsMenu>
        <ItemsMenu>Produtos</ItemsMenu>
        <ItemsMenu>Clientes</ItemsMenu>
      </MenuItems>
    </Container>
  );
};
export default Menu;
