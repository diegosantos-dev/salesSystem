import React from 'react';
import GridLayout from 'components/Templates/GridLayout';
import Image from 'components/Atoms/Image';
import { CardDashbordNumber, CardText } from 'components/Organisms/Card';
import Title from 'components/Atoms/Title';

import QRCodeLinkedin from 'static/images/qrCodeLinkedin.png';
import QRCodeGithub from 'static/images/qrCodeGithub.png';
import QRCodeDonate from 'static/images/qrCodeDonate.jpeg';

import { ContainerCardDashboard } from './style';

const Home = () => {
  return (
    <GridLayout>
      <Title>
        <strong>Bem-vindo,</strong> Diego
      </Title>
      <ContainerCardDashboard>
        <CardDashbordNumber title="Clientes" />
        <CardDashbordNumber title="Produtos" />
        <CardDashbordNumber title="Pedidos" />
      </ContainerCardDashboard>
      <CardText marginTop={28}>
        <p>Projeto feito com ReactJS e Java.</p>
        <p>
          Desenvolvedor: Diego Santos. Use a camera do seu celular nos QRCode
          abaixo para me achar.
        </p>
      </CardText>
      <ContainerCardDashboard marginTop={28}>
        <CardText center>
          <Image urlImage={QRCodeLinkedin} w="150" h="150" />
        </CardText>
        <CardText center>
          <Image urlImage={QRCodeGithub} w="150" h="150" />
        </CardText>
        <CardText center>
          <Image urlImage={QRCodeDonate} w="150" h="150" />
          <p>Donete por Pix 😍🚀</p>
        </CardText>
      </ContainerCardDashboard>
    </GridLayout>
  );
};

export default Home;
