import React, { useState, useEffect } from "react";
import slide5 from "../../assets/images/slide5.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";
import "./Slider.scss";

const images = [slide5, slide2, slide3];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % images.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [currentSlide]);

    const handlePrevSlide = () => {
        setCurrentSlide((currentSlide - 1 + images.length) % images.length);
    };

    const handleNextSlide = () => {
        setCurrentSlide((currentSlide + 1) % images.length);
    };

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="slider">
            <div className="slider__images-container">
                {images.map((image, index) => (
                    <img
                        key={index}
                        className={`slider__image ${index === currentSlide ? "slider__image--active" : ""
                            }`}
                        src={image}
                        alt={`Slide ${index + 1}`}
                    />
                ))}
            </div>
            <button className="slider__button slider__button--prev" onClick={handlePrevSlide}>
                &#10094;
            </button>
            <button className="slider__button slider__button--next" onClick={handleNextSlide}>
                &#10095;
            </button>
            <div className="slider__dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`slider__dots__dot ${index === currentSlide ? "slider__dots__dot--active" : ""
                            }`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slider;