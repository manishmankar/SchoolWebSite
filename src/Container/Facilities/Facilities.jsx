import React, { Component } from "react";
import FacilitieComponent from "../../Components/FacilitieComponent/FacilitieComponent";
import "./Facilities.css";

const amenities = [
  {
    id: 1,
    img: "https://new.iselearning.ac.in/wp-content/uploads/blackboard.png",
    contian: "Digitally smart classrooms for engaging learning",
  },
  {
    id: 2,
    img: "https://new.iselearning.ac.in/wp-content/uploads/electronics.png",
    contian: "Learning and development through 3D projection",
  },
  {
    id: 3,
    img: "https://new.iselearning.ac.in/wp-content/uploads/knowledge.png",
    contian: "Well curated library with wide range of books ",
  },
  {
    id: 4,
    img: "https://new.iselearning.ac.in/wp-content/uploads/laboratory.png",
    contian: "State of the art computer lab",
  },
  {
    id: 5,
    img: "https://new.iselearning.ac.in/wp-content/uploads/playing.png",
    contian: "Well-planned state of the art play area for sporting activities",
  },
  {
    id: 6,
    img: "https://new.iselearning.ac.in/wp-content/uploads/skateboard.png",
    contian: "Indoor skating rink",
  },
];

const infrastructure = [
  {
    id: 1,
    img:
      "https://new.iselearning.ac.in/wp-content/uploads/surveillance-camera.png",
    contian: "24 hours security guard & CCTV surveillance across the campus",
  },
  {
    id: 2,
    img:
      "https://new.iselearning.ac.in/wp-content/uploads/fire-extinguisher.png",
    contian: "Entire structure equipped with fire safety",
  },
  {
    id: 3,
    img: "https://new.iselearning.ac.in/wp-content/uploads/infrastructure.png",
    contian: "Quality controlled earthquake resistant RCC frame structure",
  },
  {
    id: 4,
    img: "https://new.iselearning.ac.in/wp-content/uploads/water.png",
    contian: "R.O water plant for clean drinking water",
  },
  {
    id: 5,
    img: "https://new.iselearning.ac.in/wp-content/uploads/soap.png",
    contian: "Basic hygiene amenities",
  },
  {
    id: 6,
    img: "https://new.iselearning.ac.in/wp-content/uploads/tree.png",
    contian: "Landscaped vertical garden & metal cladding ",
  },
];

export default class Facilities extends Component {
  render() {
    return (
      <div>
        <div className="facilitiesHedding">
          <div>Facilities</div>
          <div>Home/Facilities</div>
        </div>
        <div>
          <FacilitieComponent data={amenities} name="Amenities" />;
        </div>
        <div>
          <FacilitieComponent data={infrastructure} name="Infrastructure" />;
        </div>
        <div>
          <FacilitieComponent data={progressive} name="Progressive Education" />
        </div>
      </div>
    );
  }
}

const progressive = [
  {
    id: 1,
    img: "https://new.iselearning.ac.in/wp-content/uploads/smartphone.png",
    contian: "Complete updated data of child in one smart app",
  },
  {
    id: 2,
    img: "https://new.iselearning.ac.in/wp-content/uploads/optometrist.png",
    contian: "Biometric attendance",
  },
  {
    id: 3,
    img: "https://new.iselearning.ac.in/wp-content/uploads/computer.png",
    contian: "Computer education from std.1 onwards ",
  },
  {
    id: 4,
    img: "https://new.iselearning.ac.in/wp-content/uploads/question.png",
    contian: "Limited studentsper classroom",
  },
  {
    id: 5,
    img: "https://new.iselearning.ac.in/wp-content/uploads/homework.png",
    contian: "Assignment tests for performance evaluation at regular intervals",
  },
  {
    id: 6,
    img: "https://new.iselearning.ac.in/wp-content/uploads/mind.png",
    contian: "Extra-curricular activities for holistic development",
  },
];
