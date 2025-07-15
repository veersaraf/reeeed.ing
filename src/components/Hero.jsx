import React from 'react';

const Hero = () => {
  const handleTestFlightClick = () => {
    window.open('https://testflight.apple.com', '_blank');
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-title">Reed</h1>
          <h2 className="hero-subtitle">Books that think with you</h2>
          <button className="hero-cta" onClick={handleTestFlightClick}>
            Get TestFlight
          </button>
          <p className="hero-description">
            Most books contain a few great ideas hidden in hundreds of pages. Reed uncovers them, makes them interactive, and helps you remember what matters.
          </p>
        </div>
        <div className="hero-right hero-mockups">
          <div className="phone-mockups">
            <div className="phone phone-1">
              <div className="phone-screen">
                <img 
                  src="/images/screenshot1.PNG" 
                  alt="Reed App Screenshot 1" 
                  style={{ width: '100%', height: '100%', objectFit: 'fill', borderRadius: '32px' }}
                />
              </div>
            </div>
            <div className="phone phone-2">
              <div className="phone-screen">
                <img 
                  src="/images/screenshot2.PNG" 
                  alt="Reed App Screenshot 2" 
                  style={{ width: '100%', height: '100%', objectFit: 'fill', borderRadius: '32px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 