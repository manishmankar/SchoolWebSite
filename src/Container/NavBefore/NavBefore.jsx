import React, { Component } from "react";
import "./NavBefore.css";
import { Button } from "antd";

export class NavBefore extends Component {
  render() {
    return (
      <div className="navBefor">
        <div></div>
        <div className="leftItem">
          <div className="item">Blog</div>
          <div className="item">FAQ</div>
          <div className="item">360View</div>
          <div className="item">App</div>
          <div className="item">
            <Button size="small">Admission</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBefore;
