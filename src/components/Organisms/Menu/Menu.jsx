import React from 'react';
import urls from 'static/urls';
import Logo from 'components/Molecules/Logo';
import { Link, useLocation } from 'react-router-dom';

import { Container, MenuItems, Li } from './style';

const Menu = () => {
  const { pathname } = useLocation();
  return (
    <Container>
      <Logo />
      <MenuItems>
        <Link to={urls.ROUTES.HOME}>
          <Li actived={urls.ROUTES.HOME === pathname ? true : false}>
            Dashboards
          </Li>
        </Link>
        <Link to={urls.ROUTES.CLIENTS}>
          <Li actived={urls.ROUTES.CLIENTS === pathname ? true : false}>
            Clientes
          </Li>
        </Link>
        <Link to={urls.ROUTES.PLACE_ORDER}>
          <Li actived={urls.ROUTES.PLACE_ORDER === pathname ? true : false}>
            Pedidos
          </Li>
        </Link>
        <Link to={urls.ROUTES.PRODUCTS}>
          <Li actived={urls.ROUTES.PRODUCTS === pathname ? true : false}>
            Produtos
          </Li>
        </Link>
      </MenuItems>
    </Container>
  );
};
export default Menu;
