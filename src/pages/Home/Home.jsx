import React, { useEffect } from 'react';
import GridLayout from 'components/Templates/GridLayout';
import Image from 'components/Atoms/Image';
import Title from 'components/Atoms/Title';
import { CardDashbordNumber, CardText } from 'components/Organisms/Card';
import { Creators as ProductsActions } from 'store/ducks/products';
import { Creators as ClientsActions } from 'store/ducks/clients';
import { useDispatch, useSelector } from 'react-redux';

import QRCodeLinkedin from 'static/images/qrCodeLinkedin.png';
import QRCodeGithub from 'static/images/qrCodeGithub.png';
import QRCodeDonate from 'static/images/qrCodeDonate.jpeg';

import { ContainerCardDashboard, ContainerCardDashboardOld } from './style';

const Home = () => {
  const dipatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { clients } = useSelector((state) => state.clients);

  useEffect(() => {
    dipatch(ClientsActions.getClients());
    dipatch(ProductsActions.getProducts());
  }, []);
  return (
    <GridLayout>
      <Title>
        <strong>Bem-vindo,</strong> Diego
      </Title>
      <ContainerCardDashboard>
        <CardDashbordNumber title="Clientes" amount={clients.length} />
        <CardDashbordNumber title="Produtos" amount={products.length} />
      </ContainerCardDashboard>
      <CardText marginTop={28}>
        <p>Projeto feito com ReactJS e Java.</p>
        <p>
          Desenvolvedor: Diego Santos. Use a camera do seu celular nos QRCode
          abaixo para me achar.
        </p>
      </CardText>
      <ContainerCardDashboardOld marginTop={28}>
        <CardText center>
          <Image urlImage={QRCodeLinkedin} w="150" h="150" />
        </CardText>
        <CardText center>
          <Image urlImage={QRCodeGithub} w="150" h="150" />
        </CardText>
        <CardText center>
          <Image urlImage={QRCodeDonate} w="150" h="150" />
          <p>
            Donete por Pix <span>😍🚀</span>
          </p>
        </CardText>
      </ContainerCardDashboardOld>
    </GridLayout>
  );
};

export default Home;
