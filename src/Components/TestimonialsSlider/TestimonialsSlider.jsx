import React, { Component } from "react";
import "./TestimonialsSlider.css";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default class DemoCarousel extends Component {
  render() {
    return (
      <CarouselProvider
        infinite={true}
        naturalSlideWidth={100}
        naturalSlideHeight={25}
        totalSlides={3}
      >
        <Slider className="TestimonialSlider">
          <Slide index={0}>
            <div className="TestimonialSliderContainer">
              <div>
                A big thanks to all the teachers for putting so much effort into
                my child's education and being so corporative and helpful. The
                teachers are very passionate and caring towards the child I am
                extremely happy with Imperial School of Excellence
              </div>
              <div>
                <img src="" alt="" />
                <div>
                  <div>GOSAI VISHWA BHARAT</div>
                  <div>Parents</div>
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={1}>
            <div className="TestimonialSliderContainer">
              <div>
                A big thanks to all the teachers for putting so much effort into
                my child's education and being so corporative and helpful. The
                teachers are very passionate and caring towards the child I am
                extremely happy with Imperial School of Excellence
              </div>
              <div>
                <img src="" alt="" />
                <div>
                  <div>GOSAI VISHWA BHARAT</div>
                  <div>Parents</div>
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={2}>
            <div className="TestimonialSliderContainer">
              <div>
                A big thanks to all the teachers for putting so much effort into
                my child's education and being so corporative and helpful. The
                teachers are very passionate and caring towards the child I am
                extremely happy with Imperial School of Excellence
              </div>
              <div>
                <img src="" alt="" />
                <div>
                  <div>GOSAI VISHWA BHARAT</div>
                  <div>Parents</div>
                </div>
              </div>
            </div>
          </Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}
