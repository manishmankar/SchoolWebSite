import React, { Component } from "react";
import "./LearnComponent.css";

export default class LearnComponent extends Component {
  render() {
    return (
      <div className="LearnComponentContainer">
        {this.props.details ? (
          this.props.details.map((data, index) => {
            return (
              <div key={index} className="LearnComponent">
                <div className="LearnComponentFront ">
                  <img src={data.img} />
                  <div className="LearnComponentFrontHedding">{data.title}</div>
                  <div className="LearnComponentFrontSubHe">{data.title1}</div>
                </div>
                <div className="LearnComponentBack aButton">
                  <div>{data.contain}</div>
                </div>
              </div>
            );
          })
        ) : (
          <div>null</div>
        )}
      </div>
    );
  }
}
