import React from 'react';
import { Container, Number } from './style';

export const CardDashbordNumber = ({ title, amount }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <span>Total: </span>
      <Number>{amount}</Number>
    </Container>
  );
};

export const CardText = ({ marginTop, children, center }) => (
  <Container center={center} marginTop={marginTop}>
    {children}
  </Container>
);
