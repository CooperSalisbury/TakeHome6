import React from 'react';
import './TravelBlog.css';

const TravelBlog = ({ placeHeading, placeImg1, placeImg2, placeImg3, placeDescription }) => {
  return (
    <div className="travel-blog">
      <h1>{placeHeading}</h1>
      <div className="image-container">
        <img src={placeImg1} alt="Place 1" />
        <img src={placeImg2} alt="Place 2" />
        <img src={placeImg3} alt="Place 3" />
      </div>
      <p>{placeDescription}</p>
    </div>
  );
};

export default TravelBlog;