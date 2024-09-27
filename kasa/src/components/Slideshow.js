import React, { useState } from 'react';
import './Slideshow.scss';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
            &lt;
          </button>
          <button className="next-button" onClick={goToNext}>
            &gt;
          </button>
          <div className="slide-counter">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slide-image"
      />
    </div>
  );
};

export default Slideshow;