import React from 'react';
import Hero from './components/Hero';

export const App = () => {
  const Desc = () => (
    <section style={{background: '#f8f6f2', padding: '6rem 0 4rem 0', textAlign: 'center', fontFamily: 'Newsreader, serif'}}>
      <div style={{maxWidth: 700, margin: '0 auto'}}>
        <img 
          src="/images/book.png" 
          alt="Translucent Book" 
          style={{
            width: '200px',
            height: 'auto',
            marginBottom: '3rem',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        />
        <p style={{fontSize: '3rem', color: '#6d5c3d', marginBottom: 32, fontWeight: 400, letterSpacing: '-0.01em'}}>Most of what you read is forgotten.</p>
        <p style={{fontSize: '3rem', color: '#7d6a4a'}}>It's a failure of method, not memory.</p>
        <p style={{fontSize: '3rem', color: '#7d6a4a'}}>Reed was built to fix this.</p>
      </div>
    </section>
  );

  const Footer = () => (
    <section style={{background: '#181818', padding: '6rem 0 4rem 0', textAlign: 'center', color: '#fff', fontFamily: 'Newsreader, serif'}}>
      <div style={{maxWidth: 700, margin: '0 auto'}}>
        <h2 style={{fontSize: '4rem', fontWeight: 700, marginBottom: 24, color: '#fff'}}>REED</h2>
        <p style={{fontSize: '1.1rem', color: '#e0e0e0', marginBottom: 18}}>Footer</p>
      </div>
    </section>
  );

  return (
    <div className="app">
      <Hero />
      <Desc />
      <Footer />
    </div>
  );
};

export default App; 