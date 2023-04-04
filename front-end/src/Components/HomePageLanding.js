import Map from './Map.js';
import React from 'react';
import DataCard from './DataCard.js';
import"../Styles/homePageLanding.css";
import DataCard2 from './DataCard2.js';
import DataCard3 from './DataCard3.js';
import DataCard4 from './DataCard4.js';
import InfoIcons from './InfoIcons.js';
import Carousel from "./CarouselComp.js";
// import mealkitSplash from '../assets/mealkitsSplash.jpeg';

let sampleText = "Everyone knows that NYC is the place to go if you want some delicious pizza. I mean they even have their own style of pizza! But, did you know that New York City was the birthplace of pizza in America?"

const HomePageLanding = () => {
  return (
    <div className='home-page-wrapper'>
          <div className='carousel-wrapper'>
            <Carousel />
          </div>
          <div className='info-icons-container'>
            <InfoIcons />
          </div>
          <div className="home-content-image-container">
            <DataCard />
            <DataCard2 />
          </div>

    <div className="home-main-content-container">
      <div className='main-content-container-p'>
        <section>{sampleText}</section>
        <section id="section-heading"><h1>"Incredible app with great purpose" - The New York Chimes</h1></section>
        <section>{sampleText}</section>
        <section><h1>"Changing the Environment" - The New York Toast</h1></section>
      </div>
    </div>
    <div className="home-content-image-container">
      <DataCard3 />
      <DataCard4 />
    </div>
      <Map />
    </div>
  )
};

export default HomePageLanding;