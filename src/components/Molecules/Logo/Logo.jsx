import React from 'react';
import Image from 'components/Atoms/Image';
import LogoImage from 'static/images/logo.png';

const Logo = () => {
  return <Image urlImage={LogoImage} w="140px" h="32px" />;
};

export default Logo;
