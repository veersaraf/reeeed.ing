import React from 'react';

export const Hero = () => {
  const handleTestFlightClick = () => {
    window.open('https://testflight.apple.com', '_blank');
  };

  return (
    <section className="hero">
      <div className="reed-logo">Reed</div>
      <div className="hero-content">
        <div className="hero-phone">
          <div className="phone-frame">
            <video 
              src="/reedVid.MP4" 
              alt="Reed App Demo" 
              className="phone-screen-img" 
              autoPlay 
              muted 
              loop
              playsInline
            />
          </div>
        </div>
        <h1 className="hero-headline">Books, that think with you</h1>
        <button className="hero-cta" onClick={handleTestFlightClick}>
          Get TestFlight
        </button>
      </div>
    </section>
  );
};

export default Hero; 