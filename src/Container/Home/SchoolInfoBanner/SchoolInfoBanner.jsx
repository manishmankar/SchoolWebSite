import React, { Component } from "react";
import "./SchoolInfoBanner.css";

export default class SchoolInfoBanner extends Component {
  render() {
    return (
      <div className="SchoolInfoBanner">
        <div className="SchoolInfoBannerContainer">
          <div className="SchoolInfoBannerLogo">
            <img
              src="https://new.iselearning.ac.in/wp-content/uploads/ImperialSchool_logo.png"
              alt=""
            />
          </div>
          <div className="SchoolInfoBannerDetails">
            <div>One of the most</div>
            <div>gorgeous / innovative / flexible / rich-featured</div>
            <div>featured</div>
            <div>theme tool / companion</div>
            <div>for your store / website</div>
          </div>
        </div>
      </div>
    );
  }
}
