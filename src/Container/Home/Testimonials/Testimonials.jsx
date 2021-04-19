import React, { Component } from "react";
import TestimonialCard from "../../../Components/TestimonialCard/TestimonialCard";
import DemoCarousel from "../../../Components/TestimonialsSlider/TestimonialsSlider";

import "./Testimonials.css";

export default class Testimonials extends Component {
  render() {
    return (
      <div className="Testimonials">
        <div className="TestimonialsContainer">
          <div className="TestimonialsLeft">
            <div className="TestimonialsHedding">Latest News</div>
            <div className="TestimonialsLeftContainer">
              <TestimonialCard />
              <TestimonialCard />
            </div>
          </div>
          <div className="TestimonialsRight">
            <DemoCarousel />
          </div>
        </div>
      </div>
    );
  }
}
