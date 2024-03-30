import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import TravelBlog from './components/TravelBlog/TravelBlog';
import TravelData from './TravelData';

const App = () => {
  return (
    <div className="app">
      <Hero />
      {TravelData.map((data) => (
        <TravelBlog
          id={data.id}
          placeHeading={data.placeHeading}
          placeImg1={data.placeImg1}
          placeImg2={data.placeImg2}
          placeImg3={data.placeImg3}
          placeDescription={data.placeDescription}
        />
      ))}
    </div>
  );
};

export default App;