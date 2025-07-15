import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Footer from './components/Footer';

const Why = () => (
  <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'top', overflow: 'hidden', paddingTop: '7rem' }}>
    {/* <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Why</h1> */}
    <p style={{ fontSize: '1.2rem', color: '#444', maxWidth: 500, textAlign: 'left' }}>
      Reed was built on a simple observation: the spark of insight from a finished book often fades within weeks. The knowledge people spend hours consuming simply doesn't stick. This isn't a failure of memory, but a failure of method. Passive reading was never designed for long-term retention.
    </p>
    <p style={{ fontSize: '1.2rem', color: '#444', maxWidth: 500, textAlign: 'left' }}>
      The app was therefore engineered around a single principle: to truly learn something, one must interact with it. By breaking books down into core concepts and providing tools to challenge, connect, and reflect on those ideas, Reed was designed to transform reading from a passive act of consumption into an active process of understanding. It was created to turn fleeting insights into lasting knowledge.  
    </p>
  </div>
);

export const App = () => {
  const [route, setRoute] = useState(window.location.hash.replace('#', '') || '/');

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash.replace('#', '') || '/');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div className="app">
      <Navigation />
      {route === '/' ? <Hero /> : null}
      {route === '/why' ? <Why /> : null}
      <Footer />
    </div>
  );
};

export default App; 