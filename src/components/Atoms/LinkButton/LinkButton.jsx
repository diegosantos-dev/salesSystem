import React from 'react';
import { Link } from 'react-router-dom';

import { ContainerButton } from './style';

const LinkButton = ({ router, text, onClick, ...attr }) => {
  return (
    <ContainerButton onClick={onClick} {...attr}>
      <Link to={router}>{text}</Link>
    </ContainerButton>
  );
};

export default LinkButton;
