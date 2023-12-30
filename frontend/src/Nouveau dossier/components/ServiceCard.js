// src/components/ServiceCard.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/ServiceCard.css';
import { Link} from 'react-router-dom';
const ServiceCard = ({ id,image, title, description }) => {
  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div className="col-md-4">
      <div className="card" style={cardStyle}>
      <Link to={`/services/${id}`}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
