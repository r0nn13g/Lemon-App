import React from 'react';
import "../Styles/Carousel.css";
import Carousel from 'nuka-carousel';

//Carousel Banner Component
function CarouselComp() {
    const carouselOptions = [
        {
            headline: 'Lemon 🍋 ',
            subtext: '♻️ making good since we could 👩‍🍳'
        },
        {
            headline: 'new 🤘 ',
            subtext: '🥥 vegan options now available 🍋'
        },
        {
            headline: 'variety 👏 ',
            subtext: '🍍 variety in your area! 🌶'
        },
        {
            headline: 'Meals 🍲 ',
            subtext: '🥙 free, fresh & prepped daily 🍱'
        }
    ];
    //Iterating through carousel options and displaying .subtext of each option
    const displayCarousel = carouselOptions.map((option, index) => {
        return (
            <div key={index} className='adText-container' >
                        <b>{option.subtext}</b>
            </div>
        )
    })
    //returns a Carousel imported from nuka
  return (
    <div className='carousel-wrapper'>
        <Carousel speed={850} withoutControls={true} cellSpacing={0} autoplay="true" autoplayInterval={5000} wrapAround="true">
            {displayCarousel}
        </Carousel>
    </div>
  )
}

export default CarouselComp