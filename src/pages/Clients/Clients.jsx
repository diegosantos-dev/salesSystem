import React, { useEffect } from 'react';
import { cpf as CPFValidator } from 'cpf-cnpj-validator';

import GridLayout from 'components/Templates/GridLayout';
import Title from 'components/Atoms/Title';
import urls from 'static/urls';
import { CardText } from 'components/Organisms/Card';
import LinkButton from 'components/Atoms/LinkButton';

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
      <LinkButton router={urls.ROUTES.ADD_CLIENTS} text="Adicionar Clientes" />
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
                  <div>{CPFValidator.format(cpf)}</div>
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
