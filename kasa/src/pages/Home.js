import React from 'react';
import Banner from '../components/Banner';
import Logement from '../components/Logement';
import logementsData from '../data/logements.json';
import './Home.scss';

function Home() {
  return (
    <div className="home-container">
      <Banner image={require('../assets/banner1.png')} /> 
      <div className="gallery">
        {logementsData.map((logement) => (
          <Logement key={logement.id} logement={logement} /> // Affichage de chaque logement
        ))}
      </div>
    </div>
  );
}

export default Home;