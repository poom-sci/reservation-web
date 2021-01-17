import React, { Component } from "react";

import classes from "./FooterColumn.module.css";
import FooterNavigationItem from "../FooterNavigationItem/FooterNavigationItem";

class FooterColumn extends Component {
  render() {
    const footerNavArr = Object.keys(this.props.columnData["data"]).map(
      (el, index) => {
        // console.log(this.props.columnData['key']+index);
        return (
          <FooterNavigationItem key={index} >
            {this.props.columnData["data"][el].text}
          </FooterNavigationItem>
        );
      }
    );
    // console.log(this.props.columnData['key'])

    return (
      <div  className={classes.FooterColumn}>
        {footerNavArr}
      </div>
    );
  }
}
export default FooterColumn;
