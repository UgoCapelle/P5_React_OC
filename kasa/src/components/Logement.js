import React from 'react';
import { Link } from 'react-router-dom'; // Import de Link
import './Logement.scss'; 

function Logement({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} className="logement-link">
      <div className="logement">
        <img src={logement.cover} alt={logement.title} className="logement-image" />
        <div className="logement-info">
          <h3 className="logement-title">{logement.title}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Logement;