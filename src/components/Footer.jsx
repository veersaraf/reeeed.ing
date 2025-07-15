import React from 'react';

const Footer = () => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '10px',
      left: '50%',
      transform: 'translateX(-50%)',
      fontSize: '0.7rem',
      color: '#666',
      opacity: 0.7,
      animation: 'flicker 3s infinite',
      zIndex: 1000,
      fontFamily: 'inherit'
    }}>
      Developed by 0to42
    </div>
  );
};

export default Footer; 