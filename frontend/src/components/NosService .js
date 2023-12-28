import React from 'react';
import ServiceCard from './ServiceCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import services from './ServicesData'
const NosService = () => {

  return (
    <div className="container mt-5">
      <div className="row">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
    
      </div>
    </div>
  );
};

export default NosService ;
