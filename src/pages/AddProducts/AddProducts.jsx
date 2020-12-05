import React, { useEffect, useState } from 'react';
import GridLayout from 'components/Templates/GridLayout';
import Title from 'components/Atoms/Title';
import urls from 'static/urls';
import { Link } from 'react-router-dom';
import { CardText } from 'components/Organisms/Card';

import { Creators as ProductsActions } from 'store/ducks/products';
import { useDispatch, useSelector } from 'react-redux';

import { ContainerCardDashboard } from './style';

const AddProducts = () => {
  const [nameProduct, setNameProduct] = useState();
  const [priceProduct, setPriceProduct] = useState();
  const [productsRegister, setProductsRegister] = useState([]);
  const dipatch = useDispatch();

  const { products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    dipatch(ProductsActions.getProducts());
  }, []);

  useEffect(() => {
    setProductsRegister(products.reverse().slice(0, 5));
  }, [isLoading]);

  return (
    <GridLayout>
      <Title>Adicionar Produtos</Title>
      <ContainerCardDashboard>
        <CardText title="Products">
          <ul>
            <div>
              <div>Nome:</div>
              <div>Preço:</div>
            </div>
            <li>
              <div>
                <input
                  type="text"
                  name="name_product"
                  id="name_product"
                  value={nameProduct}
                  onChange={(e) => setNameProduct(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="number"
                  name="name_product"
                  id="name_product"
                  value={priceProduct}
                  onChange={(e) => setPriceProduct(e.target.value)}
                />
              </div>
            </li>
          </ul>
        </CardText>
        <button
          onClick={() => {
            dipatch(ProductsActions.addProducts({ nameProduct, priceProduct }));
            setNameProduct('');
            setPriceProduct('');
          }}
        >
          Adicionar
        </button>
        <Title>Últimos Produtos adicionados</Title>
        <CardText title="Products">
          <ul>
            <div>
              <div>Nome:</div>
              <div>Preço:</div>
            </div>
            {productsRegister.map((product) => {
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

export default AddProducts;
