import React, { Component } from "react";

import classes from "./TopicImage.module.css";
// import CoverImage from "../../assets/image/cover2.jpg";

class TopicImage extends Component {
  render() {
    return (
      <div className={classes.TopicCover}>
        <div className={classes.box}>
          <h1 className={classes.text}>{this.props.children}</h1>
        </div>

        <img
          className={classes.image}
          src={this.props.coverImage}
          alt="background"
        />
      </div>
    );
  }
}
export default TopicImage;
