import React, { Component } from "react";

import classes from "./Image.module.css";
// import CoverImage from "../../assets/image/cover2.jpg";

class Image extends Component {
  render() {
    return (
      <div className={classes.ImageContainer}>
        <img
        //   className={classes.image}
          src={this.props.src}
          alt={this.props.alt}
        />
      </div>
    );
  }
}
export default Image;
