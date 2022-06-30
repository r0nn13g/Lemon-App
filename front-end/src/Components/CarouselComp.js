import React from 'react';
import "../Styles/Carousel.css";
import Carousel from 'nuka-carousel';
import freshProduce from "../assets/fresh-produce.jpg";

function CarouselComp() {
    const carouselOptions = [
        {
            headline: 'Baked Goodness 🥐',
            subtext: 'From participating locations',
            image: freshProduce
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
            image: freshProduce
        }
    ];

    const displayCarousel = carouselOptions.map((option, index) => {
        return (
            <div key={index} className='ad-container' >
                <div className='adText-container'>
                    <h1>
                        {option.headline}
                    </h1>
                    <h1>
                        {option.subtext}
                    </h1>
                </div>
                <div className='adImage-container'>
                    {/* <img src={option.image} alt="carousel-pic"/> */}
                </div>
            </div>
        )
    })
  return (
    <div>
        <Carousel speed={800} withoutControls={true} cellSpacing={0} autoplay="true" autoplayInterval={5000} wrapAround="true">
            {displayCarousel}
        </Carousel>
    </div>
  )
}

export default CarouselComp