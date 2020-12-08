import React, { useEffect, useState } from 'react';
import { cpf as CPFValidator } from 'cpf-cnpj-validator';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import GridLayout from 'components/Templates/GridLayout';
import Title from 'components/Atoms/Title';
import LinkButton from 'components/Atoms/LinkButton';
import { CardText } from 'components/Organisms/Card';
import Input from 'components/Atoms/Input';

import { Creators as ClientsActions } from 'store/ducks/clients';
import { useDispatch, useSelector } from 'react-redux';

import { ContainerCardDashboard, ContainerButton } from './style';

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

  const AddClientsRegister = () => {
    if (CPFValidator.isValid(register)) {
      dipatch(ClientsActions.addClients({ nameClient, register }));
      setNameClient('');
      setRegister('');
    } else {
      NotificationManager.info(`CPF inváido!`);
    }
  };

  return (
    <GridLayout>
      <NotificationContainer />
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
                <Input
                  type="text"
                  name="name_product"
                  id="name_product"
                  value={nameClient}
                  onChange={(e) => setNameClient(e.target.value)}
                />
              </div>
              <div>
                <Input
                  type="number"
                  name="register_client"
                  id="register_client"
                  value={register}
                  onChange={(e) => setRegister(e.target.value)}
                />
              </div>
            </li>
          </ul>
        </CardText>
        {nameClient && register && (
          <ContainerButton>
            <LinkButton
              onClick={() => {
                AddClientsRegister();
              }}
              text="Adicionar"
            />
          </ContainerButton>
        )}
        <div style={{ marginTop: '20px' }}>
          <Title>Últimos Clientes adicionados</Title>
          <CardText>
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
                    <div>{CPFValidator.format(cpf)}</div>
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

export default AddClients;
