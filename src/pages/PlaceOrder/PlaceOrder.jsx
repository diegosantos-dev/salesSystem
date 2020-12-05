import React, { useEffect, useState } from 'react';
import GridLayout from 'components/Templates/GridLayout';
import Title from 'components/Atoms/Title';
import urls from 'static/urls';
import { Link } from 'react-router-dom';
import { CardText } from 'components/Organisms/Card';

import { Creators as ClientsActions } from 'store/ducks/clients';
import { useDispatch, useSelector } from 'react-redux';

import { ContainerCardDashboard } from './style';

const Products = () => {
  const [nameClient, setNameClient] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const dipatch = useDispatch();
  const { searchClients } = useSelector((state) => state.clients);

  useEffect(() => {
    // dipatch(ClientsActions.getClients());
  }, []);

  useEffect(() => {
    console.log(1);
    dipatch(ClientsActions.getSearch(nameClient));
    setShowSuggestions(true);
  }, [nameClient]);

  return (
    <GridLayout>
      <Title>Pedido</Title>
      <Link to={urls.ROUTES.CLIENTS}>Consultar Clientes</Link>
      <Link to={urls.ROUTES.PRODUCTS}>Consultar Produtos</Link>
      <ContainerCardDashboard>
        <CardText title="Products">
          <ul>
            <div>
              <div>Cliente:</div>
              <div>Cod. do Produtos:</div>
              <div>Quantidade:</div>
            </div>
            <li>
              <div>
                <input
                  type="text"
                  name="name_client"
                  id="name_client"
                  value={nameClient}
                  onChange={(e) => setNameClient(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="number"
                  name="name_product"
                  id="name_product"
                  // value={priceProduct}
                  // onChange={(e) => setPriceProduct(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="number"
                  name="name_product"
                  id="name_product"
                  // value={priceProduct}
                  // onChange={(e) => setPriceProduct(e.target.value)}
                />
              </div>
            </li>
          </ul>
        </CardText>
        {showSuggestions && (
          <div>
            <p>Clique no cliente que deseja:</p>
            <ul>
              {searchClients.map((client) => {
                const { id, nome } = client;
                return (
                  <li
                    onClick={() => {
                      setNameClient(nome);
                      setShowSuggestions(false);
                    }}
                  >
                    {nome}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </ContainerCardDashboard>
    </GridLayout>
  );
};

export default Products;
