import React from "react";
import Slider from "react-slick";
import Banner from "../../../Components/SliderComponet/Banner";
import "./SimpleSlider.css";
import img1 from "../../../Assets/1.jpg";
import img2 from "../../../Assets/2.jpg";
import img3 from "../../../Assets/3.jpg";

const bann = [
  {
    image: img1,
    title: "6D Deploment Plan",
    banimg: [
      "https://img.icons8.com/wired/64/000000/hand.png",
      "https://img.icons8.com/carbon-copy/100/000000/girl-running.png",
      "https://img.icons8.com/ios/50/000000/date-man-man.png",
      "https://img.icons8.com/wired/64/000000/hand.png",
    ],
    bantitle: [
      "ACADEMIC DEVELOPMENT",
      "PHYSICAL DEVLOPMENT",
      "EMOTION DEVELOPMENT",
      "MORAL DEVELOPMENT",
    ],
  },
  {
    image: img2,
    title: "Coures offering",
    banimg: [
      "https://img.icons8.com/wired/64/000000/hand.png",
      "https://img.icons8.com/carbon-copy/100/000000/girl-running.png",
      "https://img.icons8.com/ios/50/000000/date-man-man.png",
      "https://img.icons8.com/wired/64/000000/hand.png",
    ],
    bantitle: [
      "ACADEMIC DEVELOPMENT",
      "PHYSICAL DEVLOPMENT",
      "EMOTION DEVELOPMENT",
      "MORAL DEVELOPMENT",
    ],
  },
  {
    image: img3,
    title: "learning beyond classroom",
    banimg: [
      "https://img.icons8.com/wired/64/000000/hand.png",
      "https://img.icons8.com/carbon-copy/100/000000/girl-running.png",
      "https://img.icons8.com/ios/50/000000/date-man-man.png",
      "https://img.icons8.com/wired/64/000000/hand.png",
    ],
    bantitle: [
      "ACADEMIC DEVELOPMENT",
      "PHYSICAL DEVLOPMENT",
      "EMOTION DEVELOPMENT",
      "MORAL DEVELOPMENT",
    ],
  },
];
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
      {bann.map((data, index) => {
        return (
          <div className="slide">
            <div className="image">
              <img src={data.image} alt="" />
            </div>
            <div className="bannerBox">
              <Banner data={data} />
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
