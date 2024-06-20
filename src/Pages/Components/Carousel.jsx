import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Carousel.css';
import { useNavigate } from 'react-router-dom';

const Carousel = ({ images }) => {

  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    pauseOnFocus: false,
    centerMode: true,
    centerPadding: '150px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0px',
        }
      },
    ]
  };

  const handleButtonClick = (image, index) => {
    console.log(`Button clicked for image ${index}:`, image);
    navigate(`/${image.id}`)
    
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image.link} alt={`carousel-item-${index}`} />
            <FontAwesomeIcon icon={faCirclePlay} className="play-button" onClick={() => handleButtonClick(image, index+1)}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
