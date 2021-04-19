import React, { Component } from "react";
import "./SchoolInfo.css";
export default class SchoolInfo extends Component {
  render() {
    return (
      <div className="schoolInfoContainer">
        <div className="schoolInfoHedding">
          <h2>Imperial School of Excellence Kids Zone & Academics</h2>
          <h4>
            Providing Education From Nursery To Primary (Gujarati and English
            Medium)
          </h4>
        </div>
        <div className="schoolInfoTypes">
          <div className="schoolInfoTypesEach">
            <img src="https://img.icons8.com/dusk/64/000000/crown.png" />
            <h3>Imperial Kids</h3>
            <h4>Nursery, Junior KG, Senior KG</h4>
          </div>
          <div className="schoolInfoTypesEach">
            <img src="https://img.icons8.com/plasticine/100/000000/school.png" />
            <h3>Imperial Lower Primary</h3>
            <h4>Nursery, Junior KG, Senior KG</h4>
          </div>
          <div className="schoolInfoTypesEach">
            <img src="https://img.icons8.com/cute-clipart/64/000000/trigonometry.png" />
            <h3>Impe rial Upper Primary</h3>
            <h4>6th to 8th Standard</h4>
          </div>
        </div>
      </div>
    );
  }
}
