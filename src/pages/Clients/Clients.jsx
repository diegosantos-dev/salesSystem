import React, { useEffect } from 'react';
import GridLayout from 'components/Templates/GridLayout';
import Title from 'components/Atoms/Title';
import urls from 'static/urls';
import { Link } from 'react-router-dom';
import { CardText } from 'components/Organisms/Card';

import { Creators as ClientsActions } from 'store/ducks/clients';
import { useDispatch, useSelector } from 'react-redux';

import { ContainerCardDashboard } from './style';

const Products = () => {
  const dipatch = useDispatch();
  const { clients } = useSelector((state) => state.clients);

  useEffect(() => {
    dipatch(ClientsActions.getClients());
  }, []);

  return (
    <GridLayout>
      <Title>Clientes</Title>
      <Link to={urls.ROUTES.ADD_CLIENTS}>Adicionar Clientes</Link>
      <ContainerCardDashboard>
        <CardText title="Products">
          <ul>
            <div>
              <div>Nome:</div>
              <div>CPF:</div>
            </div>
            {clients.map((client) => {
              const { nome, cpf } = client;
              return (
                <li>
                  <div>{nome}</div>
                  <div>{cpf}</div>
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
