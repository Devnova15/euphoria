import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './Banner&EmblaCarousel.css';

export function BannerEmblaCarousel() {
    const [emblaRef] = useEmblaCarousel({loop: false}, [Autoplay()]);

    const slides = [
        {
            img: "/Banner-Images/dior-sauvage-2.webp",
            title: "Dior Sauvage",
            description: "Dior Sauvage is a fragrance in which your chosen one will want to drown. The graceful dance of the enchanting composition captivates with its freshness and freedom.",
            buttonText: "Explore Now"
        },
        {
            img: "/Banner-Images/dior-sauvage.webp",
            title: "The New Dior Experience",
            description: "Feel the freshness and intensity of the new Dior Sauvage, crafted for the modern man.",
            buttonText: "Discover More"
        },
        {
            img: "/Banner-Images/dior-sauvage-3.webp",
            title: "Unleash Your Wild Side",
            description: "A perfect blend of strength and elegance. Experience the unique composition of Dior Sauvage.",
            buttonText: "Shop Now"
        }
    ];

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {slides.map((slide, index) => (
                    <div className="embla__slide" key={index}>
                        <div className="embla__text">
                            <h1>{slide.title}</h1>
                            <p>{slide.description}</p>
                            <button className="embla__button">{slide.buttonText}</button>
                        </div>
                        <img src={slide.img} className="embla__image" alt={`Slide ${index + 1}`}/>
                    </div>
                ))}
            </div>
        </div>
    );
}