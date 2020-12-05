import React, { useEffect, useState } from 'react';
import GridLayout from 'components/Templates/GridLayout';
import Title from 'components/Atoms/Title';
import urls from 'static/urls';
import { Link } from 'react-router-dom';
import { CardText } from 'components/Organisms/Card';

import { Creators as ClientsActions } from 'store/ducks/clients';
import { useDispatch, useSelector } from 'react-redux';

import { ContainerCardDashboard } from './style';

const AddClients = () => {
  const [nameClient, setNameClient] = useState('');
  const [register, setRegister] = useState('');
  const [clientsRegister, setClientsRegister] = useState([]);
  const dipatch = useDispatch();

  const { clients, isLoading } = useSelector((state) => state.clients);

  useEffect(() => {
    dipatch(ClientsActions.getClients());
  }, []);

  useEffect(() => {
    setClientsRegister(clients.reverse().slice(0, 5));
  }, [isLoading]);

  return (
    <GridLayout>
      <Title>Adicionar Clientes</Title>
      <ContainerCardDashboard>
        <CardText title="Products">
          <ul>
            <div>
              <div>Nome:</div>
              <div>CPF:</div>
            </div>
            <li>
              <div>
                <input
                  type="text"
                  name="name_product"
                  id="name_product"
                  value={nameClient}
                  onChange={(e) => setNameClient(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="number"
                  name="name_product"
                  id="name_product"
                  value={register}
                  onChange={(e) => setRegister(e.target.value)}
                />
              </div>
            </li>
          </ul>
        </CardText>
        <button
          onClick={() => {
            dipatch(ClientsActions.addClients({ nameClient, register }));
            setNameClient('');
            setRegister('');
          }}
        >
          Adicionar
        </button>
        <Title>Últimos Clientes adicionados</Title>
        <CardText title="Products">
          <ul>
            <div>
              <div>Nome:</div>
              <div>CPF:</div>
            </div>
            {clientsRegister.map((clients) => {
              const { nome, cpf } = clients;
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

export default AddClients;
