import React, { Component } from "react";
import "./SideBar.css";

export default class SideBar extends Component {
  state = {
    hover1: false,
    hover2: false,
    hover3: false,
    hover4: false,
  };

  hoverOn1 = () => {
    this.setState({ hover1: true });
  };
  hoverOff1 = () => {
    this.setState({ hover1: false });
  };
  hoverOn2 = () => {
    this.setState({ hover2: true });
  };
  hoverOff2 = () => {
    this.setState({ hover2: false });
  };
  hoverOn3 = () => {
    this.setState({ hover3: true });
  };
  hoverOff3 = () => {
    this.setState({ hover3: false });
  };
  hoverOn4 = () => {
    this.setState({ hover4: true });
  };
  hoverOff4 = () => {
    this.setState({ hover4: false });
  };
  render() {
    return (
      <div className="SideBar">
        <div
          onMouseEnter={this.hoverOn1}
          onMouseLeave={this.hoverOff1}
          className="sideBarBox1"
        >
          <img src="https://img.icons8.com/dotty/64/000000/admission.png" />
          <div
            className={this.state.hover1 ? "sideBarHideAct1" : "sideBarHide1"}
          >
            <h2>Admissions open for</h2>
            <div>
              <div>VDHS Kids</div>
              <div>VDHS Lower Primary</div>
              <div>VDHS Upper Primary</div>
            </div>
            <p>
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s
            </p>
          </div>
        </div>
        <div
          onMouseEnter={this.hoverOn2}
          onMouseLeave={this.hoverOff2}
          className="SideBarBox2"
        >
          <img src="https://img.icons8.com/color/48/000000/worldwide-location.png" />
          <div
            className={this.state.hover2 ? "sideBarHideAct2" : "sideBarHide2"}
          >
            <h3>sidebar2</h3>
            <div></div>
          </div>
        </div>

        <div
          onMouseEnter={this.hoverOn3}
          onMouseLeave={this.hoverOff3}
          className="SideBarBox3"
        >
          <img src="https://img.icons8.com/emoji/48/000000/question-mark-emoji.png" />
          <div
            className={this.state.hover3 ? "sideBarHideAct3" : "sideBarHide3"}
          >
            <h3>sidebar3</h3>
          </div>
        </div>
        <div
          onMouseEnter={this.hoverOn4}
          onMouseLeave={this.hoverOff4}
          className="SideBarBox4"
        >
          <img src="https://img.icons8.com/cotton/64/000000/business-contact--v2.png" />
          <div
            className={this.state.hover4 ? "sideBarHideAct4" : "sideBarHide4"}
          >
            <h3>sidebar4</h3>
          </div>
        </div>
      </div>
    );
  }
}
