import React from 'react';
import { Link } from 'react-router-dom'; 
import './Logement.scss'; 

function Logement({ logement }) {
  return (
    <div className="logement">
      <Link to={`/logement/${logement.id}`} className="logement-link">
        <img src={logement.cover} alt={logement.title} className="logement-image" />
      </Link>
      <div className="logement-info">
        <h3 className="logement-title">{logement.title}</h3>
      </div>
    </div>
  );
}

export default Logement;