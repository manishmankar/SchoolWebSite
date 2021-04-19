import React, { Component } from "react";
import "./NavBar.css";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Menu, Dropdown, Button, Space } from "antd";
import { Link } from "react-router-dom";

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

export default class NavBar extends Component {
  render() {
    return (
      <div className="navBarContainer">
        <div className="navbar">
          <Link>
            <div>Home</div>
          </Link>

          <div>
            <Dropdown overlay={menu}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                About Us
              </a>
            </Dropdown>
          </div>
          <div>
            <Dropdown overlay={menu}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                Acadmics
              </a>
            </Dropdown>
          </div>
          <Link>
            <div> Gallary</div>
          </Link>
          <Link>
            <div>Facilitize</div>
          </Link>
          <Link>
            <div>Events</div>
          </Link>
          <Link>
            <div>Enquiry</div>
          </Link>
          <Link>
            <div>Contact Us</div>
          </Link>
        </div>
      </div>
    );
  }
}
