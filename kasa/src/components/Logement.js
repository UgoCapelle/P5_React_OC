import React from 'react';
import './Logement.scss'; 

function Logement({ logement }) {
  return (
    <div className="logement">
      <img src={logement.cover} alt={logement.title} className="logement-image" />
      <div className="logement-info">
        <h3 className="logement-title">{logement.title}</h3>
      </div>
    </div>
  );
}

export default Logement;