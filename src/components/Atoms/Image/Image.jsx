import React from 'react';

const Image = ({ urlImage, w, h }) => {
  return <img src={urlImage} width={w} height={h} />;
};

export default Image;
