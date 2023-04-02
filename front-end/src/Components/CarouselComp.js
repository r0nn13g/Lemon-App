import React from 'react';
import "../Styles/Carousel.css";
import Carousel from 'nuka-carousel';

function CarouselComp() {
    const carouselOptions = [
        {
            headline: 'Lemon 🍋 ',
            subtext: 'making good since 2023'
        },
        {
            headline: 'new 🤘 ',
            subtext: 'Vegan options now available'
        },
        {
            headline: 'variety 👏 ',
            subtext: '  in your area!'
        },
        {
            headline: 'Meals 🍲 ',
            subtext: 'free, fresh & prepped daily'
        }
    ];

    const displayCarousel = carouselOptions.map((option, index) => {
        return (
            <div key={index} className='adText-container' >
                        <b>{option.headline}{option.subtext}</b>
            </div>
        )
    })
  return (
    <div className='carousel-wrapper'>
        <Carousel speed={850} withoutControls={true} cellSpacing={0} autoplay="true" autoplayInterval={5000} wrapAround="true">
            {displayCarousel}
        </Carousel>
    </div>
  )
}

export default CarouselComp