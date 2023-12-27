// src/components/ServiceCard.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ServiceCard.css';
import { Link} from 'react-router-dom';
const ServiceCard = ({ id,image, title, description }) => {
  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'center '
  };
  return (
    <div className="col-md-4">
      <div className="card" style={cardStyle}>
          <h5 className="card-title">{title}</h5>
      <Link to={`/${title}`}>
        <div className="card-body">
          {/* <p className="card-text">{description}</p> */}
        </div>
      </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
