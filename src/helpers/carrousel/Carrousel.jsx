import "./Carrousel.scss";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function CustomSlide({ src, style }) {

    return (
        <div >
            <div className="slider__card">Hello</div>
            <img src={src} alt="" />
        </div>
    );
}



function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,backgroundColor:"black", position:"absolute", left:"0px",bottom:"6vw", zIndex:"4" }}
        onClick={onClick}
      />
    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, backgroundColor:"black", position:"absolute", right:"0px",bottom:"6vw", zIndex:"4" }}
        onClick={onClick}
      />
    );
}
  
  

export default function Carrousel({title}) {
    var settings = {
        accessibilit:true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0, 
        prevArrow: <SamplePrevArrow className="left__arrow" />,
        nextArrow: <SampleNextArrow className="right__arrow" />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <p className="carrousel__headline">{title}</p>
    <Slider {...settings} className="slider">
        
      <CustomSlide />
      <CustomSlide />
      <CustomSlide/>
      <CustomSlide/>
      <CustomSlide/>
      <CustomSlide/>
      <CustomSlide/>
      <CustomSlide/>
      <CustomSlide/>
      <CustomSlide/>
      <CustomSlide/>
      <CustomSlide/>
      <CustomSlide/>
      <CustomSlide/>
      <CustomSlide/>
      <CustomSlide/>
     
     
    </Slider>
    </>
  );
}