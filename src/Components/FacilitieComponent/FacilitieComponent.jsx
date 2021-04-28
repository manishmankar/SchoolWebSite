import React, { Component } from "react";
import "./FacilitieComponent.css";

export default class FacilitieComponent extends Component {
  render() {
    return (
      <div className="facilitieComponent">
        <h1>{this.props.name}</h1>
        <div className="facilitieContainer">
          {this.props.data.map((data) => {
            return (
              <div className="faciliteItem">
                <img src={data.img} alt="" />
                <h3>{data.contian}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
