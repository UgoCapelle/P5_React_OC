import React from 'react';
import Banner from '../components/Banner';
import Logement from '../components/Logement';
import logementsData from '../data/logements.json';
import './Home.scss';

function Home() {
  return (
    <div>
      <Banner />
      <div className="gallery">
        {logementsData.map((logement) => (
          <Logement key={logement.id} logement={logement} />
        ))}
      </div>
    </div>
  );
}

export default Home;