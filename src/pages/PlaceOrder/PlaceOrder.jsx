import React, { useState } from 'react';
import GridLayout from 'components/Templates/GridLayout';
import Title from 'components/Atoms/Title';
import urls from 'static/urls';
import { CardText } from 'components/Organisms/Card';
import LinkButton from 'components/Atoms/LinkButton';
import Input from 'components/Atoms/Input';

import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import { useDispatch, useSelector } from 'react-redux';
import { Creators as ClientsActions } from 'store/ducks/clients';
import { Creators as ProductsActions } from 'store/ducks/products';
import { Creators as OrderActions } from 'store/ducks/order';

import { ContainerButton } from '../AddClients/style';
import {
  ContainerCardDashboard,
  ContainerButtons,
  ContainerClientsSugesttons,
  ContainerOrderAndResume,
  Table,
} from './style';

const Products = () => {
  const [nameClient, setNameClient] = useState('');
  const [idClient, setIdClient] = useState('');
  const [codProd, setCodProd] = useState('');
  const [nameProd, setNameProd] = useState('');
  const [quantProd, setQuantProd] = useState('');
  const [priceProd, setPriceProd] = useState('');

  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showFinishOrder, setShowFinishOrder] = useState(false);
  const dipatch = useDispatch();
  const { searchClients } = useSelector((state) => state.clients);
  const { searchProducts } = useSelector((state) => state.products);

  const finishorder = () => {
    const body = {
      cliente: idClient,
      itens: [
        {
          produto: codProd,
          quantidade: quantProd,
        },
      ],
    };
    dipatch(OrderActions.addOrder(body));
    clearStates();
  };

  const validateOrder = () => {
    if (
      priceProd &&
      nameClient &&
      idClient &&
      codProd &&
      nameProd &&
      quantProd
    ) {
      setShowFinishOrder(true);
    } else {
      setShowFinishOrder(false);
    }
  };

  const clearStates = () => {
    setPriceProd('');
    setNameClient('');
    setIdClient('');
    setCodProd('');
    setNameProd('');
    setQuantProd('');
    setShowFinishOrder(false);
  };

  const getSearchAutoComplete = (value) => {
    setNameClient(value);
    setShowSuggestions(true);
    dipatch(ClientsActions.getSearch(nameClient));
  };

  const searchProductsAutoComplete = (value) => {
    setCodProd(value);
    setShowSuggestions(true);
    dipatch(ProductsActions.searchProducts(value));
  };
  return (
    <GridLayout>
      <NotificationContainer />
      <Title>Pedido</Title>
      <ContainerButtons>
        <LinkButton
          router={urls.ROUTES.CONSULT_ORDER}
          text="Consultar Pedidos"
        />
        <LinkButton router={urls.ROUTES.CLIENTS} text="Consultar Clientes" />
        <LinkButton router={urls.ROUTES.PRODUCTS} text="Consultar Produtos" />
      </ContainerButtons>
      <ContainerCardDashboard>
        <CardText>
          <ul>
            <div>
              <div>Cliente:</div>
              <div>Cod. do Produto:</div>
              <div>Quantidade:</div>
            </div>
            <li>
              <div>
                <Input
                  type="text"
                  name="name_client"
                  id="name_client"
                  value={nameClient}
                  onChange={(e) => {
                    getSearchAutoComplete(e.target.value);
                    e.target.value.length > 0
                      ? setShowSuggestions(true)
                      : setShowSuggestions(false);
                  }}
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="name_product"
                  id="name_product"
                  value={codProd}
                  onChange={(e) => {
                    searchProductsAutoComplete(e.target.value);
                    e.target.value.length > 0
                      ? setShowSuggestions(true)
                      : setShowSuggestions(false);
                  }}
                />
              </div>
              <div>
                <Input
                  type="number"
                  name="name_product"
                  id="name_product"
                  onChange={(e) => setQuantProd(e.target.value)}
                />
              </div>
            </li>
          </ul>
        </CardText>
        {!showFinishOrder && (
          <ContainerButton>
            <LinkButton
              text="Adicionar Pedido"
              onClick={() => validateOrder()}
            />
          </ContainerButton>
        )}
        {showSuggestions && (
          <ContainerClientsSugesttons>
            <p>
              Clique no {searchClients.length > 0 ? 'cliente' : 'produto'}{' '}
              sugerido:
            </p>

            <ul>
              {nameClient.length > 0 &&
                searchClients?.map((client) => {
                  const { id, nome } = client;
                  return (
                    <li
                      onClick={() => {
                        setIdClient(id);
                        setNameClient(nome);
                        setShowSuggestions(false);
                        dipatch(ClientsActions.clearSearch());
                      }}
                    >
                      {nome}
                    </li>
                  );
                })}
              {codProd.length > 0 &&
                searchProducts?.map((client) => {
                  const { descricao, preco, id } = client;
                  return (
                    <li
                      onClick={() => {
                        setCodProd(id);
                        setNameProd(descricao);
                        setPriceProd(preco);
                        setShowSuggestions(false);
                        dipatch(ProductsActions.clearSearch());
                      }}
                    >
                      {descricao}
                      {preco}
                    </li>
                  );
                })}
            </ul>
          </ContainerClientsSugesttons>
        )}
        <ContainerOrderAndResume>
          {showFinishOrder && (
            <>
              <h3>Total Pedido</h3>
              <Table>
                <thead>
                  <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{nameProd}</td>
                    <td>R$ {priceProd},00</td>
                    <td>{quantProd}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th colspan="3">Total</th>
                    <td>{priceProd * quantProd}</td>
                  </tr>
                </tfoot>
              </Table>
              <ContainerButton>
                <LinkButton
                  text="Limpar pedido"
                  style={{ marginRight: '20px' }}
                  onClick={() => {
                    clearStates();
                  }}
                />
                <LinkButton text="Finalizar" onClick={() => finishorder()} />
              </ContainerButton>
            </>
          )}
        </ContainerOrderAndResume>
      </ContainerCardDashboard>
    </GridLayout>
  );
};

export default Products;
