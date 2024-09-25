import React from 'react';
import Banner from '../components/Banner';
import logementsData from '../data/logements.json';

function Home() {
  return (
    <div>
      <Banner />
      <ul>
        {logementsData.map((logement) => (
          <li key={logement.id}>
            <h3>{logement.title}</h3>
            <p>{logement.location}</p>
            <img src={logement.cover} alt={logement.title} style={{ width: '200px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;