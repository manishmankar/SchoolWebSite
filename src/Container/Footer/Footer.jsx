import React, { Component } from "react";
import "./Footer.css";
import FacebookFilled from "@ant-design/icons";
import { Form, Input, InputNumber, Button } from "antd";

export default class Footer extends Component {
  render() {
    return (
      <div className="footerContainer">
        <div className="footerBlock1">
          <img
            src="https://new.iselearning.ac.in/wp-content/uploads/ImperialSchool_logo.png"
            alt=""
          />
          <h3>Imperial School of Excellence</h3>
          <p>
            Imperial School of Excellence is a young, co-educational
            international school based in Ahmedabad. The school, true to its
            name
          </p>
        </div>
        <div className="footerBlock2">
          <h2>Contact Details</h2>
          <p>
            Beside Abhinav Arcade, Viratnagar 100 ft Ring Road, Odhav – Nikol,
            Ahmedabad – 382415
          </p>
          <div>+91 9998222907,</div>
          <div>+91 9998222905</div>
          <h3>info@iselearning.ac.in</h3>
        </div>
        <div className="footerBlock3">
          <h2>Quick Links</h2>
          <div className="qiuckLinks">
            <div>
              <li>Home</li>
              <li> About Us</li>
              <li>Academics</li>
              <li>Facilities</li>
              <li>Events</li>
              <li> Inquiry</li>
            </div>
            <div>
              <li>Contact Us</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>360 View</li>
              <li>App</li>
              <li>Admission</li>
            </div>
          </div>
          <div>
            <FacebookFilled />
          </div>
        </div>
        <div className="footerBlock4">
          <h2>Request Callback</h2>
          <Form name="basic" initialValues={{ remember: true }}>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="Name" />
            </Form.Item>

            <Form.Item
              name="mobile"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input placeholder="Mobile" />
            </Form.Item>

            <Form.Item>
              <Button className="reqbtn" type="primary" htmlType="submit">
                Request Callback
              </Button>
            </Form.Item>
          </Form>
          <div className="footerBlock4Img">
            <div>
              <img
                src="https://new.iselearning.ac.in/wp-content/uploads/Google-Play.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://new.iselearning.ac.in/wp-content/uploads/App-Store.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
