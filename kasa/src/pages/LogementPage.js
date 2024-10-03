import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import logementsData from '../data/logements.json';
import Slideshow from '../components/Slideshow';
import Collapse from '../components/Collapse';
import './LogementPage.scss';

const RatingStars = ({ rating }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const emptyStars = totalStars - fullStars;

  return (
    <div className="rating-stars">
      {[...Array(fullStars)].map((_, index) => (
        <span key={`full-${index}`} className="star full">★</span>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`} className="star empty">★</span>
      ))}
    </div>
  );
};

function LogementPage() {
  const { id } = useParams();
  const logement = logementsData.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="logement-page">
      <Slideshow images={logement.pictures} />
      <div className="logement-details">
        <div className="logement-info">
          <h1 className="logement-title">{logement.title}</h1>
          <p className="logement-location">{logement.location}</p>
          <div className="logement-tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="owner-details">
          <div className="owner-info">
            <p className="owner-name">{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} className="owner-photo" />
          </div>
          <RatingStars rating={parseFloat(logement.rating)} />
        </div>
      </div>
      <div className="logement-collapses">
        <Collapse title="Description" className="logement-collapse">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipements" className="logement-collapse">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default LogementPage;