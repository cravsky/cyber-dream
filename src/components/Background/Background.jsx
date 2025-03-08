import React from 'react';
import morpheusImage from '../../assets/morpheus.png';
import '../../App.css'; // Ensure styles are included

export default function Background({ loading }) {
  return (
    <div
      className={`background ${loading ? 'loading' : ''}`}
      style={{ backgroundImage: `url(${morpheusImage})` }}
    />
  );
}
