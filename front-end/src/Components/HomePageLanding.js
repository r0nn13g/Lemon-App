import React from 'react';
import"../Styles/homePageLanding.css";
import Slideshow from "./Slideshow.js";
import Carousel from "./CarouselComp.js";
import DataCard from './DataCard.js';
import DataCard2 from './DataCard2.js';
import InfoIcons from './InfoIcons.js';
import mealkitSplash from '../assets/mealkitsSplash.jpeg';

let sampleText = "Everyone knows that NYC is the place to go if you want some delicious pizza. I mean they even have their own style of pizza! But, did you know that New York City was the birthplace of pizza in America?"

const HomePageLanding = () => {
  return (
    <div className='home-page-wrapper'>
          <img id="top-splash-page" src={mealkitSplash} />
          <InfoIcons />
          <div className="home-content-image-container">
          <DataCard />
          <DataCard2 />
          </div>
        <div className='slide-show-wrapper'>
          <Slideshow/>
        </div>
      <div className="home-main-content-container">
        <div className='main-content-container-p'>
        <section>{sampleText}</section>
        <section><h1>"Incredible app with great purpose" - The New York Chimes</h1></section>
        <section>{sampleText}</section>
        <section><h1>"Changing the Environment" - The New York Toast</h1></section>
        </div>
        {/* <Carousel /> */}
      </div>

    </div>
  )
}

export default HomePageLanding;