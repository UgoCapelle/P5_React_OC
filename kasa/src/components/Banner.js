import React from 'react';
import { useLocation } from 'react-router-dom';  
import './Banner.scss';

function Banner({ image }) {
  const location = useLocation();  

  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay"></div>
      {location.pathname !== '/about' && (
        <h1 className="banner-text">
          Chez vous,<br className="mobile-break" /> partout et ailleurs
        </h1>
      )}
    </div>
  );
}

export default Banner;