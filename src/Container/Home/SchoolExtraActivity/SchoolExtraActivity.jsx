import React, { Component } from "react";
import "./SchoolExtraActivity.css";

const data = [
  {
    id: "1",
    title: "Experienced Faculty",
    img: "https://new.iselearning.ac.in/wp-content/uploads/CLass_02_VIew-768x641-1.jpg",
  },
  {
    id: "2",
    title: "Practical Studies",
    img: "https://new.iselearning.ac.in/wp-content/uploads/faculty.jpg",
  },
  {
    id: "3",
    title: "Multimedia Learning",
    img: "https://new.iselearning.ac.in/wp-content/uploads/class-302116_1920.jpg",
  },
  {
    id: "4",
    title: "Sharing Eveluation with Parents",
    img: "https://new.iselearning.ac.in/wp-content/uploads/coloring-5017864_1920.jpg",
  },
  {
    id: "5",
    title: "Support & Guidance",
    img: "https://new.iselearning.ac.in/wp-content/uploads/nursery-1219348_1920.jpg",
  },
];

export default class SchoolExtraActivity extends Component {
  state = {
    image:
      "https://new.iselearning.ac.in/wp-content/uploads/CLass_02_VIew-768x641-1.jpg",
  };

  changleHandler = (key) => {
    const m = data.filter((m) => {
      if (key === m.title) {
        return m;
      } else if (key === m.title) {
        return m;
      } else if (key === m.title) {
        return m;
      } else if (key === m.title) {
        return m;
      } else if (key === m.title) {
        return m;
      }
    });
    this.setState({ image: m[0].img });
  };

  render() {
    return (
      <div className="schoolExtraActivity">
        <div className="SchoolExtraActivityHeding">
          Class-Ahead School for Class-Apart Education
        </div>
        <div className="schoolExtraActivityContainer">
          <div className="schoolExtraActivityTypes">
            {data.map((data, index) => {
              return (
                <div key={index}>
                  <div
                    className="eachIteam"
                    key={index}
                    onMouseOver={() => this.changleHandler(data.title)}
                  >
                    {data.title}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="SchoolExtraActivityImg">
            <img src={this.state.image} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
