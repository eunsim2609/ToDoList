import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


class ToDoDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
      now: 0
    };
  }
  handleClickDate = (arrow) => {
    const { now } = this.state;

    this.setState(() => ({
      now: now + (arrow === "right" ? 1 : -1),
    }));
  };

  render() {
    const { today, now } = this.state;
    const newDate = new Date(today.valueOf() + now * 24 * 60 * 60 * 1000);
    const year = newDate.getFullYear();
    const month = newDate.toLocaleString("en-US", { month: "long" });
    const day = newDate.getDate();

    return (
      <div className="dateBox">
        <img
          onClick={() => this.handleClickDate("left", -1)}
          src={require("../image/left.png")}
          alt="왼쪽화살표"
        />
        <i>
          <span>{month + " " + day + ", " + year}</span>
        </i>
        <img
          onClick={() => this.handleClickDate("right", 1)}
          src={require("../image/right.png")}
          alt="오른쪽화살표"
        />
      </div>
    );
  }
}

export default ToDoDate;
