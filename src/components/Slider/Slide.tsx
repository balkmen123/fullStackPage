import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { dataDigitalBestSeller } from './data';

function SimpleSlider() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    draggable: false,
    className: `carousel `,
    dotsClass: 'carousel__dots',
    centerMode: true,
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 1,
  };

  const handleErrorImage = (data: any) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
    }));
  };

  return (
    <div>
      ád
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item, index) => {
          console.log('|item', item);

          return (
            <div className="card" key={index}>
              <div className="card-top">
                <img src={item.linkImg} alt={item.title} onError={handleErrorImage} />
                <h1>{item.title}</h1>
              </div>
              <div className="card-bottom">
                <h3>{item.price}</h3>
                <span className="category">{item.category}</span>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
