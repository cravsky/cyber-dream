import React from 'react';
import morpheusImage from '../../assets/morpheus.png';

export default function Background({ loading }) {
  const backgroundStyle = {
    backgroundImage: `url(${morpheusImage})`,
    filter: loading ? 'brightness(1.0)' : 'brightness(0.4)',
    opacity: loading ? 1.0 : 0.8,
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-1]"
      style={backgroundStyle}
    />
  );
}
