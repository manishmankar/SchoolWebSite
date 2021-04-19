import React, { Component } from "react";
import "./Banner.css";
import { Button } from "antd";
import { Card } from "antd";

const { Meta } = Card;

export default class Banner extends Component {
  render() {
    return (
      <div className="bannerContainer">
        <div className="leftBanner">
          <div className="leftBannerText">6D Deploment Plan</div>
          <div>
            <Button type="primary">Primary</Button>
          </div>
        </div>
        <div className="rigtBanner">
          <div className="rightBannerContainer">
            <div className="rightBannerIteam">
              <img src="https://img.icons8.com/wired/64/000000/hand.png" />
              <div>ACADEMIC DEVELOPMENT</div>
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
