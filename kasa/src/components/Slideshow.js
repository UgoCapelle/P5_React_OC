import React, { useState } from 'react';
import './Slideshow.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'; 

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonctions pour naviguer entre les images
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slideshow">
      {images.length > 1 && (
        <>
          <button className="prev-button" onClick={goToPrevious}>
            <FontAwesomeIcon icon={faChevronUp} rotation={270} style={{color: "#ffffff",}} />
          </button>
          <button className="next-button" onClick={goToNext}>
            <FontAwesomeIcon icon={faChevronUp} rotation={90} style={{color: "#ffffff",}} />
          </button>
        </>
      )}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slide-image"
      />
      <div className="counter">
        {`${currentIndex + 1} / ${images.length}`}
      </div>
    </div>
  );
};

export default Slideshow;