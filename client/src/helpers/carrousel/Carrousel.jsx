import { useState } from "react";
import {FiPlay} from "react-icons/fi";
import {FaPlus} from "react-icons/fa";
import {BiLike} from "react-icons/bi";
import {BiDislike} from "react-icons/bi";
import {GiSpeaker} from "react-icons/gi";
import {GiSpeakerOff} from "react-icons/gi";
import Muted from "./videos/Muted.gif";
import "./Carrousel.scss";
import React from "react";
import Slider from "react-slick";
import netflixCinematic from "./videos/netflixCinematic.mp4";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedArr from "../featured/FeaturedArr";
console.log(FeaturedArr);



function CustomSlide() {
  const [isShown, setIsShown] = useState(false);
  const [hoverMute, setHoverMute] = useState(false);

  
    return (
      
        <div className="_silderMain">
            <div className="slider__card" onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)} >
            {isShown && (
              
              <video autoPlay muted={hoverMute} loop>
              <source src={netflixCinematic} type="video/mp4" />
              </video>
            )}
           
            <h6 className="moviNameHover">Title</h6>
            
            <h6 className="movieDescription">Movie description is generally one-liner synopsis</h6>
            <div className="moviDetailsWrap">
              <h6 className="moviTime">1hour 24mins</h6>
              <h6 className="MoviLikesCount">+16999</h6>
              <h6 className="MoviAgeRatedHover">16+</h6>
            </div>
            <h6 className="moviGenereHover">Action</h6>
            <div className="RespIconContainer">
            <div><FaPlus color="white"/></div>
            <div><FiPlay color="white"/></div>
            <div><BiLike color="white"/></div>
            <div><BiDislike color="white"/></div>
            
            </div>
            <div className="muteOrSound" onClick={()=>{setHoverMute(!hoverMute)}}>{hoverMute?<GiSpeaker color="white" size="24px"/>:<GiSpeakerOff color="white" size="24px"/>}</div>
            </div>
               
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
  
  

export default function Carrousel({title, FeaturedArr}) {
  console.log("featuredCorousel", FeaturedArr);
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
         {
         // FeaturedArr.map((e, i)=>(
        //   <CustomSlide key={i} e={e}/>
        // ))
      }
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