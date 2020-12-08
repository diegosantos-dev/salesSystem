import React, { useEffect, useState } from 'react';
import GridLayout from 'components/Templates/GridLayout';
import Title from 'components/Atoms/Title';
import LinkButton from 'components/Atoms/LinkButton';
import { CardText } from 'components/Organisms/Card';
import Input from 'components/Atoms/Input';

import { Creators as ProductsActions } from 'store/ducks/products';
import { useDispatch, useSelector } from 'react-redux';

import { ContainerCardDashboard, ContainerButton } from './style';

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

  const AddProductsRegister = () => {
    dipatch(ProductsActions.addProducts({ nameProduct, priceProduct }));
    setNameProduct('');
    setPriceProduct('');
  };

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
                <Input
                  type="text"
                  name="name_product"
                  id="name_product"
                  value={nameProduct}
                  onChange={(e) => setNameProduct(e.target.value)}
                />
              </div>
              <div>
                <Input
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
        {nameProduct && priceProduct && (
          <ContainerButton>
            <LinkButton
              onClick={() => {
                AddProductsRegister();
              }}
              text="Adicionar"
            />
          </ContainerButton>
        )}
        <div style={{ marginTop: '20px' }}>
          <Title>Últimos Produtos adicionados</Title>
          <CardText>
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
        </div>
      </ContainerCardDashboard>
    </GridLayout>
  );
};

export default AddProducts;
