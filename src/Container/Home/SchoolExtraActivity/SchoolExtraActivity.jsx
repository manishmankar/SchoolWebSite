import React, { Component } from "react";
import "./SchoolExtraActivity.css";
import img11 from "../../../Assets/New folder/11.jpg";
import img22 from "../../../Assets/New folder/22.jpg";
import img33 from "../../../Assets/New folder/33.jpg";
import img44 from "../../../Assets/New folder/44.jpg";
import img55 from "../../../Assets/New folder/55.jpg";

const data = [
  {
    id: "1",
    title: "Experienced Faculty",
    img: img11,
  },
  {
    id: "2",
    title: "Practical Studies",
    img: img22,
  },
  {
    id: "3",
    title: "Multimedia Learning",
    img: img33,
  },
  {
    id: "4",
    title: "Sharing Eveluation with Parents",
    img: img44,
  },
  {
    id: "5",
    title: "Support & Guidance",
    img: img55,
  },
];

export default class SchoolExtraActivity extends Component {
  state = {
    image: img11,
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
