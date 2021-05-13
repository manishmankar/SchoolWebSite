import React, { Component } from "react";
import "./SchoolAdmission.css";
import { Button } from "antd";

export default class SchoolAdmission extends Component {
  render() {
    return (
      <div className="SchoolAdmission">
        <div className="SchoolAdmissionContainer">
          <h1>Interested In Studying at VDHS School of Excellence?</h1>
          <p>
            Providing Education From Nursery To Primary (Gujarati and English
            Medium)
          </p>
          <div className="SchoolAdmissionButtons">
            <Button type="primary" size="large">
              Admission Inquiry
            </Button>
            <Button type="primary" size="large">
              Get Notified
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
