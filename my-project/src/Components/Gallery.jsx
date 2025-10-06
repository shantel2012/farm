import React from 'react';
import './Gallery.css'; 

import image1 from '../assets/boy.png'; 
import image2 from '../assets/cv.jpg';
import image3 from '../assets/corn.png';
import image4 from '../assets/farm.jpg';

const ImageGallery = () => {
  const images = [
    { src: image1, alt: 'Woman and child watering plants' },
    { src: image2, alt: 'Woman harvesting tomatoes' },
    { src: image3, alt: 'Hand picking a fruit from a tree' },
    { src: image4, alt: 'Man in VR headset inspecting plants' },
  ];

  return (
    <section className="image-gallery-section">
      <div className="container py-3">
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} className={`image-card image-card-${index + 1}`}>
              <img 
                src={image.src} 
                alt={image.alt} 
                className="img-fluid"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
