import React from 'react';
import"../Styles/homePageLanding.css";
import Slideshow from "./Slideshow.js";
import Carousel from "./CarouselComp.js";
import sampleImage from "../assets/splashImage1.jpeg"

let sampleText = "Everyone knows that NYC is the place to go if you want some delicious pizza. I mean they even have their own style of pizza! But, did you know that New York City was the birthplace of pizza in America? Using skills learned from his hometown Naples, Italy, the first pizza in the US was crafted in the heart of Little Italy by Italian baker, Gennaro Lombardi. Fun Fact: Lombardi’s Pizza was established in 1905 and is still around today!"

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
        <img id="home-content-img" src={sampleImage} alt="" />
          <br/>
        <p id="main-content-container-p">{sampleText}</p>
          <br/>
      </div>
    </div>
  )
}

export default HomePageLanding;