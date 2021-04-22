import React from "react";
import Slider from "react-slick";
import Banner from "../../../Components/SliderComponet/Banner";
import "./SimpleSlider.css";
import img1 from "../../../Assets/1.jpg";
import img2 from "../../../Assets/2.jpg";
import img3 from "../../../Assets/3.jpg";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  };
  return (
    <Slider {...settings} className="SimpleSliderContainer">
      <div className="slide">
        <div className="image">
          <img src={img1} alt="" />
        </div>
        <div className="bannerBox">
          <Banner />
        </div>
      </div>
      <div className="slide">
        <div className="image">
          <img src={img2} alt="" />
        </div>
        <div className="bannerBox">
          <Banner />
        </div>
      </div>
      <div className="slide">
        <div className="image">
          <img src={img3} alt="" />
        </div>
        <div className="bannerBox">
          <Banner />
        </div>
      </div>
    </Slider>
  );
}
