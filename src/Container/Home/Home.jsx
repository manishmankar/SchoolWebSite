import React, { Component } from "react";
import LearClassRoom from "./LearClassRoom/LearClassRoom";

import SchoolAdvertise from "./SchoolAdvertise/SchoolAdvertise";
import SchoolExtraActivity from "./SchoolExtraActivity/SchoolExtraActivity";

import SchoolInfo from "./SchoolInfo/SchoolInfo";
import SchoolInfoBanner from "./SchoolInfoBanner/SchoolInfoBanner";
import SimpleSlider from "./Slider/SimpleSlider";
import Testimonials from "./Testimonials/Testimonials";

export default class Home extends Component {
  render() {
    return (
      <div>
        <SimpleSlider />
        <SchoolInfo />
        <SchoolAdvertise />
        <SchoolInfoBanner />
        <SchoolExtraActivity />
        <LearClassRoom />
        <Testimonials />
      </div>
    );
  }
}
