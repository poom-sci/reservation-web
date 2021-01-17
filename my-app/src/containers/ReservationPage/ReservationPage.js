import React, { Component } from "react";

import classes from "./ReservationPage.module.css";
import TopicImage from "../../components/TopicImage/TopicImage";


class ReservationPage extends Component {
  // componentDidMount() {
  //   const publicIp = require("public-ip");

  //   (async () => {
  //     console.log(await publicIp.v4());
  //     //=> '46.5.21.123'

  //     console.log(await publicIp.v6());
  //     //=> 'fe80::200:f8ff:fe21:67cf'
  //   })();
  // }

  render() {
    return (
      <div className={classes.ReservationPage} onClick={this.onClickHandler}>
        <TopicImage coverImage="https://firebasestorage.googleapis.com/v0/b/my-web-89e77.appspot.com/o/PortfolioWeb%2Fproject_cover.jpg?alt=media">
          Reservation
        </TopicImage>
      </div>
    );
  }
}

export default ReservationPage;
