import React, { Component } from "react";

import classes from "./TimePeriod.module.css";


class TimePeriod extends Component {

  render() {

    let backdrop = [classes.backdrop];
    let article = [classes.TimePeriodArticle];
    if (this.props.right) {
      backdrop.push(classes.right);
      article.push(classes.right);
    }

    let descripiton1 = null;
    if (this.props.descripiton1) {
      descripiton1 = this.props.descripiton1
        .split("<br>")
        .map((line, index) => {
          return <p key={index}>{line}</p>;
        });
    }

    let descripiton2 = null;
    if (this.props.descripiton2) {
      descripiton2 = this.props.descripiton2
        .split("<br>")
        .map((line, index) => {
          return <p key={index}>{line}</p>;
        });
    }

    let span = null;
    if (this.props.span) {
      span=<span />;
    }

    return (
      <div className={classes.TimePeriod}>
        <div className={backdrop.join(" ")} />
        <div className={article.join(" ")}>
          <h3>{this.props.title}</h3>
          <div>{descripiton1}</div>
          {span}
          <div>{descripiton2}</div>
        </div>
        <div
          className={classes.TimePeriodImg}
          style={{ backgroundImage: `url(${this.props.src})` }}
        ></div>
      </div>
    );
  }
}

export default TimePeriod;
