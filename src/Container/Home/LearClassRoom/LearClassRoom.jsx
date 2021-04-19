import React, { Component } from "react";
import LearnComponent from "../../../Components/LearnComponent/LearnComponent";
import "./LearClassRoom.css";

const details = [
  {
    img: "https://img.icons8.com/emoji/50/000000/man-student.png",
    title: " Co-carricular & Cultural Activities",
    title1: "Art and Craft",
    contain:
      "Art & Craft, planning, singing & Dancing Drama, Talent Show, Science Fair, Fancy Dress, Debate & Quiz, Public Speaking, Field Trips, Physics Training",
  },

  {
    img: "https://img.icons8.com/fluent/48/000000/kite.png",
    title: "Festival Celebration",
    title1: "Uttarayan, Republic Day",
    contain:
      "Uttarayan, Republic Day, Holi, Guru Purnima, Raksha Bandhan, Independence Day, Janmashtami, Ganesh Chaturthi, Navratri, Dusshera, Diwali, Christmas",
  },
  {
    img: "https://img.icons8.com/office/16/000000/music.png",
    title: "Day Celebration",
    title1: "Music Day, Sports Day",
    contain:
      "Music Day, Sports Day, Teacher’s Day, Children’s Day, Friendship Day, Mother’s Day, Father’s Day, Flower’s Day",
  },
];

export default class LearClassRoom extends Component {
  render() {
    return (
      <div className="LearClassRoom">
        <div className="LearClassRoomHedding">Learning beyond Classrooms</div>
        <div className="LearClassRoomContainer">
          <LearnComponent details={details} />
        </div>
      </div>
    );
  }
}
