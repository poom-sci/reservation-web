import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact onClick={props.onClick}>Reservation</NavigationItem>
    <NavigationItem link="/aboutus" exact onClick={props.onClick}>About Us</NavigationItem>
    <NavigationItem link="/contact" exact onClick={props.onClick}>Contact</NavigationItem>
  </ul>
);

export default navigationItems;
