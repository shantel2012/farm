import React from 'react';
import './LogoStrip.css';

// Placeholder Images - Replace with your actual logo paths
import logoOrganicRice from '../assets/cv.jpg';
import logoFarm from '../assets/boy.png';
import logoFarmFresh from '../assets/corn.png';
import logoFood from '../assets/track.png';
import logoEcoProduct from '../assets/image.jpg';
import logoTractor from '../assets/map.jpg';

const logos = [
  { src: logoOrganicRice, alt: 'Organic Rice Logo' },
  { src: logoFarm, alt: 'Farm Logo' },
  { src: logoFarmFresh, alt: 'Farm Fresh Logo' },
  { src: logoFood, alt: 'Food Logo' },
  { src: logoEcoProduct, alt: 'Eco Product Logo' },
  { src: logoTractor, alt: 'Tractor Logo' },
  // Optionally, repeat logos to make a longer strip and ensure smooth looping
  { src: logoOrganicRice, alt: 'Organic Rice Logo' },
  { src: logoFarm, alt: 'Farm Logo' },
  { src: logoFarmFresh, alt: 'Farm Fresh Logo' },
  { src: logoFood, alt: 'Food Logo' },
  { src: logoEcoProduct, alt: 'Eco Product Logo' },
  { src: logoTractor, alt: 'Tractor Logo' },
];

const LogoStrip = () => {
  return (
    <section className="logo-strip-section">
      <div className="container py-5">
        <div className="logo-strip-outer">
          <div className="logo-strip-inner">
            {logos.map((logo, index) => (
              <div key={index} className="logo-item">
                <img src={logo.src} alt={logo.alt} className="img-fluid" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
