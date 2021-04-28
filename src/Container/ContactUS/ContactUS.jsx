import React, { Component } from "react";
import ContactForm from "../../Components/ContactForm/ContactForm";
import "./ContactUS.css";

export default class ContactUS extends Component {
  render() {
    return (
      <div>
        <div className="contactUSHedding">
          <div>Contact US</div>
          <div>Home/Contact US</div>
        </div>
        <div className="contactContainer">
          <div className="contactLeft">
            <h1>Contact Details</h1>
            <div className="contactDetails">
              <img
                src="https://new.iselearning.ac.in/wp-content/uploads/location-1.png"
                alt=""
              />
              <div className="contactDetailsItem">
                <h3>Address</h3>
                <p>
                  Beside Abhinav Arcade, Viratnagar 100 ft Ring Road, Odhav –
                  Nikol, Ahmedabad – 382415
                </p>
              </div>
            </div>
            <div className="contactDetails">
              <img
                src="https://new.iselearning.ac.in/wp-content/uploads/telephone.png"
                alt=""
              />
              <div className="contactDetailsItem">
                <h3>phone</h3>
                <p>+91 9998222907,</p>
                <p> +91 9998222905</p>
              </div>
            </div>
            <div className="contactDetails">
              <img
                src="https://new.iselearning.ac.in/wp-content/uploads/gmail.png"
                alt=""
              />
              <div className="contactDetailsItem">
                <h3>email</h3>
                <p>info@iselearning.com</p>
              </div>
            </div>
          </div>
          <div className="contactRight">
            <h1>Contact Us</h1>
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}
