import React, { Component } from "react";
import "./SchoolAdvertise.css";
import { Button } from "antd";
import img4 from "../../../Assets/2.jpg";

class SchoolAdvertise extends Component {
  render() {
    return (
      <div className="AdvertiseContainer">
        <div className="AdvertiseBox">
          <div className="AdvertiseBoxLeft">
            <h3>Shaping Leaders of Tomorrow</h3>
            <p>
              VDHS School of Excellence is a young, co-educational international
              school based in Ahmedabad. The school, true to its name. provides
              excellent quality education in English & Gujarati Medium right
              from Nursery to 8th Standard incorporating GSEB syllabus.
            </p>
            <p>
              We are equipped with modern facilities like 3D projection
              technology for pre-primary and e-learning smart class for lower
              primary and upper primary students. we believe in experiential
              learning and have set up infrastructure to encourage students to
              exhibit and evolve their artistic, sporting, cultural, leadership
              skills through various co-curricular activities and events.
            </p>
            <Button size="medium">Read More</Button>
          </div>

          <div className="AdvertiseBoxRight">
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default SchoolAdvertise;
