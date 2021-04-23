import React, { Component } from "react";
import "./SideBar.css";

export default class SideBar extends Component {
  render() {
    return (
      <div className="SideBar">
        <div className="SideBarBox1">
          <img src="https://img.icons8.com/dotty/64/000000/admission.png" />
          <div className="sideBarHide">
            <h3>Admissions open for</h3>
            <div>
              <div>Imperial Kids</div>
              <div>Imperial Lower Primary</div>
              <div>Imperial Upper Primary</div>
            </div>
          </div>
        </div>
        <div className="SideBarBox2">
          <img src="https://img.icons8.com/color/48/000000/worldwide-location.png" />
        </div>
        <div className="m">hello</div>
        <div className="SideBarBox3">
          <img src="https://img.icons8.com/emoji/48/000000/question-mark-emoji.png" />
        </div>
        <div className="SideBarBox4">
          <img src="https://img.icons8.com/cotton/64/000000/business-contact--v2.png" />
        </div>
      </div>
    );
  }
}
