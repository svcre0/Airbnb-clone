import React from 'react'; 
import {Link} from 'react-router-dom'
import './Card.css';

const Card = ({ src, title, description, price }) => {
  return (
    <Link className='container' to='/location-details'>
    <div className='card'>
    
      <img src={src} alt="property" />
      <div className='card-info'>
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
    </Link>
  );
}

export default Card;
