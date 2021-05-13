import React, { Component } from "react";
import "./Banner.css";
import { Button } from "antd";
import { Card } from "antd";
import { matchPath } from "react-router";

const { Meta } = Card;

export default class Banner extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div className="bannerContainer">
        <div className="leftBanner">
          <div className="leftBannerText">{this.props.data.title}</div>
          <div>
            <Button type="primary">View Details</Button>
          </div>
        </div>
        <div className="rigtBanner">
          <div className="rightBannerContainer">
            <div className="rightBannerIteam">
              <img src="https://img.icons8.com/carbon-copy/100/000000/girl-running.png" />
              <div>PHYSICAL DEVLOPMENT</div>
            </div>
            <div className="rightBannerIteam">
              <img src="https://img.icons8.com/carbon-copy/100/000000/girl-running.png" />
              <div>PHYSICAL DEVLOPMENT</div>
            </div>
          </div>
          <div className="rightBannerContainer">
            <div className="rightBannerIteam">
              <img src="https://img.icons8.com/ios/50/000000/date-man-man.png" />
              <div>EMOTION DEVELOPMENT</div>
            </div>
            <div className="rightBannerIteam">
              <img src="https://img.icons8.com/wired/64/000000/hand.png" />
              <div>ACADEMIC DEVELOPMENT</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
