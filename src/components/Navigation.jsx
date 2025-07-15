import React from 'react';

export const Navigation = () => {
  const route = window.location.hash.replace('#', '') || '/';
  return (
    <nav style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
      <div style={{ display: 'flex', gap: '2rem', fontWeight: 500, fontSize: '1.1rem' }}>
        <span style={{ cursor: 'pointer', fontWeight: route === '/' ? 700 : 500 }} onClick={() => (window.location.hash = '/')}>Reed</span>
        <span style={{ cursor: 'pointer', fontWeight: route === '/why' ? 700 : 500 }} onClick={() => (window.location.hash = '/why')}>Why?</span>
      </div>
    </nav>
  );
};

export default Navigation; 