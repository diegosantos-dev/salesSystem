import React from 'react';
import { cpf as CPFValidator } from 'cpf-cnpj-validator';

import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import GridLayout from 'components/Templates/GridLayout';
import Title from 'components/Atoms/Title';
import { CardText } from 'components/Organisms/Card';
import Input from 'components/Atoms/Input';

import { Creators as OrderActions } from 'store/ducks/order';
import { useDispatch, useSelector } from 'react-redux';

import { ContainerCardDashboard, Table } from './style';

const ConsultPlaceOrder = () => {
  const dipatch = useDispatch();
  const { order, isLoading } = useSelector((state) => state.order);

  const getOrder = (value) => {
    value.length > 0 && dipatch(OrderActions.getOrder(value));
  };

  return (
    <GridLayout>
      <NotificationContainer />
      <Title>Consultar pedidos</Title>
      <ContainerCardDashboard>
        <Input
          type="number"
          name="name_product"
          id="name_product"
          onChange={(e) => getOrder(e.target.value)}
        />
        <div style={{ marginTop: '28px' }}>
          {!isLoading && Object.keys(order).length > 0 && (
            <>
              <CardText>
                Nome: {order.nomeCliente}
                <br></br>
                CPF: {CPFValidator.format(order.cpf)}
                <br></br>
                Data do pedido: {order.dataPedido}
                <br></br>
                Situação: {order.status}
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
                      <td>{order.items[0].descricaoProduto}</td>
                      <td>{order.items[0].precoUnitario}</td>
                      <td>{order.items[0].quantidade}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colspan="3">Total</th>
                      <td>{order.total}</td>
                    </tr>
                  </tfoot>
                </Table>
              </CardText>
            </>
          )}
        </div>
      </ContainerCardDashboard>
    </GridLayout>
  );
};

export default ConsultPlaceOrder;
