import React, { useEffect } from 'react';
import GridLayout from 'components/Templates/GridLayout';
import Title from 'components/Atoms/Title';
import urls from 'static/urls';
import { Link } from 'react-router-dom';
import { CardText } from 'components/Organisms/Card';

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
      <Link to={urls.ROUTES.ADD_PRODUCT}>Adicionar Produto</Link>
      <ContainerCardDashboard>
        <CardText title="Products">
          <ul>
            <div>
              <div>Nome:</div>
              <div>Preço:</div>
            </div>
            {products.map((product) => {
              const { descricao, preco } = product;
              return (
                <li>
                  <div>{descricao}</div>
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
