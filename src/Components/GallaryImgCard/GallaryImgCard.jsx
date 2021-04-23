import React, { Component } from "react";
import "./GallaryImgCard.css";

export default class GallaryImgCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="gallaryImgCardContainer">
        {this.props.data
          ? this.props.data.map((data, index) => {
              return (
                <div className="gallaryImgCard">
                  <div className="gallaryCardImg">
                    <img src={data.img} alt="" />
                  </div>
                  <div className="gallaryCardText">{data.contain}</div>
                </div>
              );
            })
          : "hello"}
      </div>
    );
  }
}
