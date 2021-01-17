import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

import classes from "./Logo.module.css";

class Logo extends Component {

  render() {
    return (
      <div className={classes.Logo} style={{ height: this.props.height }}>
          <NavLink onClick={this.props.onClick} to='/'  ><img  src={this.props.imagePath} alt="grableProLogo" /></NavLink>
          
      </div>
    );
  }
}

export default Logo;
