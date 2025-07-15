import React, { useState, useEffect } from 'react';

export const Navigation = () => {
  const [route, setRoute] = useState(window.location.hash.replace('#', '') || '/');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash.replace('#', '') || '/');
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('hashchange', onHashChange);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('hashchange', onHashChange);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  if (isMobile) {
    return (
      <nav style={{ position: 'absolute', top: 0, right: 0, left: 0, width: '100%', height: 0, zIndex: 1001, background: 'none', boxShadow: 'none', pointerEvents: 'none' }}>
        <span
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            fontWeight: 700,
            fontSize: '1rem',
            cursor: 'pointer',
            background: 'none',
            pointerEvents: 'auto',
            userSelect: 'none',
            color: '#222',
          }}
          onClick={() => (window.location.hash = route === '/why' ? '/' : '/why')}
        >
          {route === '/why' ? '< Back' : 'Why?'}
        </span>
      </nav>
    );
  }

  return (
    <nav style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '2rem', background: 'none', boxShadow: 'none' }}>
      <div style={{ display: 'flex', gap: '2rem', fontWeight: 500, fontSize: '1.1rem' }}>
        <span style={{ cursor: 'pointer', fontWeight: route === '/' ? 700 : 500 }} onClick={() => (window.location.hash = '/')}>Reed</span>
        <span style={{ cursor: 'pointer', fontWeight: route === '/why' ? 700 : 500 }} onClick={() => (window.location.hash = '/why')}>Why?</span>
      </div>
    </nav>
  );
};

export default Navigation; 