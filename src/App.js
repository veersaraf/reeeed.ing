import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Footer from './components/Footer';

const Why = () => (
  <div className="why-text">
    {/* <h1 className="why-title">Why</h1> */}
    <p className="why-paragraph">
      Reed was built on a simple observation: the spark of insight from a finished book often fades within weeks. The knowledge people spend hours consuming simply doesn't stick. This isn't a failure of memory, but a failure of method. Passive reading was never designed for long-term retention.
    </p>
    <p className="why-paragraph">
      The app was therefore engineered around a single principle: to truly learn something, one must interact with it. By breaking books down into core concepts and providing tools to challenge, connect, and reflect on those ideas, Reed was designed to transform reading from a passive act of consumption into an active process of understanding. It was created to turn fleeting insights into lasting knowledge.  
    </p>
    <div className="why-signature"> 
      <p className="why-signature-text">
      - 0to42 Team
      </p>
    </div>
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