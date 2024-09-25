import React from 'react';
import './Banner.scss';

function Banner({ image }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay"></div>
      <div className="banner-text">Chez vous, partout et ailleurs.</div>
    </div>
  );
}

export default Banner;