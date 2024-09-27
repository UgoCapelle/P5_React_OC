import React from 'react';
import { useParams } from 'react-router-dom';
import logementsData from '../data/logements.json';
import Slideshow from '../components/Slideshow';
import './LogementPage.scss';

function LogementPage() {
  const { id } = useParams();
  const logement = logementsData.find((item) => item.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className="logement-page">
      <Slideshow images={logement.pictures} />
      <div className="logement-details">
        <h1 className="logement-title">{logement.title}</h1>
        <p className="logement-location">{logement.location}</p>
      </div>
    </div>
  );
}

export default LogementPage;