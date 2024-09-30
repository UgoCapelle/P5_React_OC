import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RatingStars = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        style={{ color: i <= rating ? "#FF6060" : "#E3E3E3" }}
      />
    );
  }
  
  return <div className="rating-stars">{stars}</div>;
};

export default RatingStars;