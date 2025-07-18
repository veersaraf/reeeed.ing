import React from 'react';
import Hero from './components/Hero';

export const App = () => {
  const Desc = () => (
    <section className="description-section">
      <div className="description-container">
        <img 
          src="/images/book.png" 
          alt="Translucent Book" 
          className="description-image"
        />
        <p className="description-text description-text-main">Most of what you read is forgotten.</p>
        <p className="description-text">It's a failure of method, not memory.</p>
        <p className="description-text">Reed was built to fix this.</p>
      </div>
    </section>
  );

  const Footer = () => (
    <section className="footer-section">
      <div className="footer-container">
        <h2 className="footer-title">REED</h2>
        <p className="footer-text">Footer</p>
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