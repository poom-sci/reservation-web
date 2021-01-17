import React, { Component } from "react";

import classes from "./Button.module.css";

class Button extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.disabled !== nextProps.disabled ||
      this.props.btnType !== nextProps.btnType ||
      this.props.clicked !== nextProps.clicked
    ) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <button
        disabled={this.props.disabled}
        className={[classes.Button, classes[this.props.btnType]].join(" ")}
        onClick={this.props.clicked}
      >
        {this.props.children}
      </button>
    );
  }
}
export default Button;
