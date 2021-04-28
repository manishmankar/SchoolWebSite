import React, { Component } from "react";
import "./NavBar.css";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Menu, Dropdown, Button, Space } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;
const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Message
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Team Members
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Achievments
      </a>
    </Menu.Item>
  </Menu>
);
const acad = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Imperial Kids
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Lower Primary
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Upper Primary
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Career
      </a>
    </Menu.Item>
  </Menu>
);

export default class NavBar extends Component {
  state = {
    click: false,
  };

  clickHandle = () => {
    this.setState({ click: !this.state.click }, () => {
      console.log(this.state.click);
    });
  };

  render() {
    const array = {
      about: [
        { id: 1, name: "Massages", path: "http://www.alipay.com/" },
        { id: 2, name: "Team Members", path: "/" },
        { id: 3, name: "Achievements", path: "/" },
      ],
      academics: [
        { id: 1, name: "Imperial Kids", path: "http://www.alipay.com/" },
        { id: 2, name: "Lower Primary", path: "/" },
        { id: 3, name: "Upper Primary", path: "/" },
      ],
    };
    return (
      <div className="navBarContainer">
        <div className="navForMobile">
          <div className="iconForMobile">
            <img
              src="https://new.iselearning.ac.in/wp-content/uploads/ImperialSchool_logo.png"
              alt=""
            />
          </div>
          <div onClick={this.clickHandle} className="hambargarIcon">
            {this.state.click ? <CloseOutlined /> : <MenuOutlined />}
          </div>
        </div>

        {this.state.click ? (
          <div className="sideWrapper">
            <Menu
              className="sideWrapperMenu"
              onClick={this.handleClick}
              defaultSelectedKeys={["1"]}
              // defaultOpenKeys={["sub1"]}
              mode="inline"
            >
              <Menu.Item>
                <div onClick={() => (window.location.href = "/")}>
                  <Menu.Item>Home</Menu.Item>
                </div>
              </Menu.Item>

              <SubMenu
                title={
                  <span>
                    <span>About Us</span>
                  </span>
                }
              >
                {array.about.map((data) => {
                  return (
                    <Menu.Item>
                      <div onClick={() => (window.location.href = data.path)}>
                        <Menu.Item>{data.name}</Menu.Item>
                      </div>
                    </Menu.Item>
                  );
                })}
              </SubMenu>

              <SubMenu key="sub2" title="Academics">
                {array.academics.map((data) => {
                  return (
                    <Menu.Item>
                      <div onClick={() => (window.location.href = data.path)}>
                        <Menu.Item>{data.name}</Menu.Item>
                      </div>
                    </Menu.Item>
                  );
                })}
              </SubMenu>

              <Menu.Item>
                <div onClick={() => (window.location.href = "/gallary")}>
                  <Menu.Item>Gallary</Menu.Item>
                </div>
              </Menu.Item>
              <Menu.Item>
                <div onClick={() => (window.location.href = "/facilities")}>
                  <Menu.Item>Facilities</Menu.Item>
                </div>
              </Menu.Item>
              <Menu.Item>
                <div onClick={() => (window.location.href = "/event")}>
                  <Menu.Item>Event</Menu.Item>
                </div>
              </Menu.Item>
              <Menu.Item>
                <div onClick={() => (window.location.href = "/inquiry")}>
                  <Menu.Item>Inquiry</Menu.Item>
                </div>
              </Menu.Item>
              <Menu.Item>
                <div onClick={() => (window.location.href = "/contact")}>
                  <Menu.Item>Contact Us</Menu.Item>
                </div>
              </Menu.Item>
            </Menu>
          </div>
        ) : null}

        <div className="navbar">
          <Link to="/">
            <div> Home</div>
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
            <Dropdown overlay={acad}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                Acadmics
              </a>
            </Dropdown>
          </div>
          <Link to="/gallary">
            <div> Gallary</div>
          </Link>
          <Link to="/facilities">
            <div>Facilitize</div>
          </Link>
          <Link to="/event">
            <div>Events</div>
          </Link>
          <Link to="/inquiry">
            <div>Inquiry</div>
          </Link>
          <Link to="/contact">
            <div>Contact Us</div>
          </Link>
        </div>
      </div>
    );
  }
}
