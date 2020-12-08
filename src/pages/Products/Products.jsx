import React, { useEffect } from 'react';
import GridLayout from 'components/Templates/GridLayout';
import Title from 'components/Atoms/Title';
import urls from 'static/urls';
import { CardText } from 'components/Organisms/Card';
import LinkButton from 'components/Atoms/LinkButton';

import { Creators as ProductsActions } from 'store/ducks/products';
import { useDispatch, useSelector } from 'react-redux';

import { ContainerCardDashboard } from './style';

const Products = () => {
  const dipatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dipatch(ProductsActions.getProducts());
  }, []);

  return (
    <GridLayout>
      <Title>Produtos</Title>

      <LinkButton router={urls.ROUTES.ADD_PRODUCT} text="Adicionar Produto" />
      <ContainerCardDashboard>
        <CardText title="Products">
          <ul>
            <div>
              <div>Nome:</div>
              <div>Preço:</div>
            </div>
            {products.map((product) => {
              const { id, descricao, preco } = product;
              return (
                <li>
                  <div>{`Cod.: ${id} - ${descricao}`}</div>
                  <div>{`R$ ${preco}`}</div>
                </li>
              );
            })}
          </ul>
        </CardText>
      </ContainerCardDashboard>
    </GridLayout>
  );
};

export default Products;
