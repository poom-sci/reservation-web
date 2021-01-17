import React, { Component } from "react";

import classes from "./Footer.module.css";
// import Logo from "../../Logo/Logo";
// import FooterColumn from "./FooterColumn/FooterColumn";
// import poomLogoLabel from "../../../assets/poom.png";
// import FooterSocial from "./FooterSocial/FooterSocial";

class Footer extends Component {
  // state = {
  //   columnData1: {
  //     data: {
  //       data1: {
  //         // link: "/",
  //         text: "ที่อยู่",
  //       },
  //       data2: {
  //         // link: "/",
  //         text:
  //           "220/1 หมู่ 4 ถ.แจ้งวัฒนะ ต.ปากเกร็ด อ.ปากเกร็ด จ.นนทบุรี 11120",
  //       },
  //     },
  //   },
  //   columnData2: {
  //     data: {
  //       data1: {
  //         // link: "/",
  //         text: "ติดต่อ",
  //       },
  //       data2: {
  //         // link: "/",
  //         text: "081-343-4433 (คุณวิชัย)",
  //       },
  //     },
  //   },
  //   columnData3: {

  //     data: {
  //       data1: {
  //         // link: "/",
  //         text: "เวลาเปิด-ปิด",
  //       },
  //       data2: {
  //         // link: "/",
  //         text: "ทุกวัน 8:00 - 16:00 ",
  //       },
  //     },
  //   },
  // };

  render() {
    // const footerRow = Object.keys(this.state).map((column,index) => {
    //   return <FooterColumn key={column} columnData={this.state[column]} />;
    // });

    return (
      <footer className={classes.Footer}>

        {/* <div key="FooterLogo" className={classes.FooterLogo}>
          <Logo imagePath={poomLogoLabel} />
        </div>
        <div key="FooterTable" className={classes.FooterTable}>
          {footerRow}
        </div> */}
        {/* <FooterSocial key="FooterSocial"></FooterSocial> */}
        <p key="FooterText" className={classes.FooterText}>
          COPYRIGHT © 2020. ALL RIGHTS RESERVED.
        </p>
      </footer>
    );
  }
}

export default Footer;
