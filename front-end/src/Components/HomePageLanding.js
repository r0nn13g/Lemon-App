import React from 'react';
import"../Styles/homePageLanding.css";
import Slideshow from "./Slideshow.js";
import Carousel from "./CarouselComp.js";
import DataCard from './DataCard.js';
import DataCard2 from './DataCard2.js';

let sampleText = "Everyone knows that NYC is the place to go if you want some delicious pizza. I mean they even have their own style of pizza! But, did you know that New York City was the birthplace of pizza in America?"

const HomePageLanding = () => {
  return (
    <div className='home-page-wrapper'>
        <Carousel />
        <div className='slide-show-wrapper'>
          <Slideshow/>
        </div>
      <div className="home-main-content-container">
        <p id="main-content-container-p">{sampleText}</p>
          <br/>
          <div className="home-content-image-container">
          <DataCard />
          <DataCard2 />
          <DataCard />
          <DataCard />

          <br/>
          </div>
      </div>
    </div>
  )
}

export default HomePageLanding;