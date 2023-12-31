import React from "react";
import Slider from "react-slick";
import dataSlider from "../../dataSlider/dataSlider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./simpleSlider.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: "10px",
          mobileFirst: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {dataSlider.map((elem) => {
          return (
            <div key={elem.id}>
              <div className="sliderWrapper">
                <h3>{elem.text_1}</h3>
                <img
                  onClick={() => window.open(`${elem.url}`)}
                  width={17}
                  // height={10}
                  className="imageSlider"
                  src={elem.img}
                  alt="imageSlider"
                />
                <p className="sliderTextAbout">
                  <span>{elem.text_2title}</span> : {elem.text_2}
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}
