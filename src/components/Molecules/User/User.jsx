import React from 'react';
import Avatar from 'components/Atoms/Avatar';
import { Container } from './style';

const User = () => {
  return (
    <Container>
      <Avatar />
      <span>Diego Santos</span>
    </Container>
  );
};

export default User;
