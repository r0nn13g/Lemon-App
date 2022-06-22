import React from 'react';
import "../Styles/Carousel.css";
import Carousel from 'nuka-carousel';
import freshProduce from "../assets/fresh-produce.jpg";
import indianFoodImage from "../assets/cropped-Indian-Food-wikicont-1.jpg";
import indianfoodbanner from "../assets/Indian-food-banner.jpg";

function CarouselComp() {
    const carouselOptions = [
        {
            headline: 'Baked Goodness 🥐',
            subtext: 'From participating locations',
            image: indianfoodbanner
        },
        {
            headline: 'Dietary Variety 👏',
            subtext: 'Check restaurant menu',
            image: freshProduce
        },
        {
            headline: 'Meal Kits 🍲',
            subtext: 'Prepped daily from trusted restaurants',
            image: freshProduce
        },
        {
            headline: 'Coming Soon 🎉',
            subtext: 'Quality goods',
            image: indianFoodImage
        }
    ];

    const displayCarousel = carouselOptions.map((option, index) => {
        return (
            <div key={index} className='ad-container' >
                <div className='adText-container'>
                    <h2>
                        {option.headline}
                    </h2>
                </div>
                <div className='adImage-container'>
                    <img src={option.image} alt="carousel-pic"/>
                </div>
            </div>
        )
    })
  return (
    <div>
        <Carousel speed={800} cellSpacing={0} autoplay="true" autoplayInterval={5000} wrapAround="true">
            {displayCarousel}
        </Carousel>
    </div>
  )
}

export default CarouselComp