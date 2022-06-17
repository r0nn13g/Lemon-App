import React from 'react';
import "../Styles/Carousel.css";
import Carousel from 'nuka-carousel';
import indianFoodImage from "../assets/cropped-Indian-Food-wikicont-1.jpg";
import indianfoodbanner from "../assets/Indian-food-banner.jpg";
import freshProduce from "../assets/fresh-produce.jpg";

function CarouselComp() {
    const carouselOptions = [
        {
            headline: 'Ready to go meals',
            subtext: 'Prepped daily',
            image: indianFoodImage
        },
        {
            headline: 'Variety of dietary categories available',
            subtext: 'Check restaurant menu',
            image: freshProduce
        },
        {
            headline: 'Bakery Goods 🍩 ',
            subtext: 'From participating locations',
            image: freshProduce
        },
        {
            headline: 'Coming to a city near you',
            subtext: 'New Restaurants',
            image: indianfoodbanner
        }
    ];

    const carouselOptionsArray = carouselOptions.map((option, index) => {
        return (
            <div key={index} className='ad-container' >
                <div className='adText-container'>
                    <h2>
                        {option.headline}
                    </h2>
                    <h4>
                        {option.subtext}
                    </h4>
                </div>
                <div className='adImage-container'>
                    <img src={option.image} alt="carousel-pic"/>
                </div>
            </div>
        )
    })
  return (
    <div>
        <Carousel speed={800} cellSpacing={30} autoplay="true" autoplayInterval={4000} wrapAround="true">
            {carouselOptionsArray}
        </Carousel>
    </div>
  )
}

export default CarouselComp