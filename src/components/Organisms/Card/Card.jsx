import React from 'react';
import { Container, Number } from './style';

export const CardList = ({ title }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <ul>
        <li>Cliente 1</li>
        <li>Cliente 1</li>
        <li>Cliente 1</li>
        <li>Cliente 1</li>
        <li>Cliente 1</li>
        <li>Cliente 1</li>
      </ul>
    </Container>
  );
};

export const CardDashbordNumber = ({ title }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <span>Total: </span>
      <Number>5</Number>
    </Container>
  );
};

export const CardText = ({ marginTop, children, center }) => (
  <Container center={center} marginTop={marginTop}>
    {children}
  </Container>
);
