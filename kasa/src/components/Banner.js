import React from 'react';
import './Banner.scss';
import bannerImage from '../assets/banner1.png';

function Banner() {
  return (
    <div className="banner">
      <div className="overlay"></div>
      <h1 className="banner-text">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;

