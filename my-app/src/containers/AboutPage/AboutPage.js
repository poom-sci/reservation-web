import React, { Component } from "react";

import classes from "./AboutPage.module.css";
import TopicImage from "../../components/TopicImage/TopicImage";
import TimePeriod from "./TimePeriod/TimePeriod";

class AboutPage extends Component {
  // state = { percentHeight: 0 };

  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // }

  // handleScroll = (event) => {
  //   const currHeight = window.scrollY;
  //   const maxHeight =
  //     document.body.scrollHeight - document.documentElement.clientHeight;

  //   this.setState({
  //     percentHeight: (currHeight / maxHeight) * 100,
  //   });
  // };

  render() {
    // const data = {
    //   data1: {
    //     right: true,
    //     src:
    //       "https://firebasestorage.googleapis.com/v0/b/web-app-1-f4f1d.appspot.com/o/aboutMe%2Faboutme1.jpg?alt=media",
    //     title: "Poom Suchao-in",
    //     descripiton1: `
    //   Infomation
    //   <br>Date of birth : June 2,2001
    //   <br>Age : 19
    //   <br>Nationality : Thai
    //   <br>Religion : Buddhist
    //   <br>Status : Single`,
    //     span: true,
    //     descripiton2: `
    //   Education
    //   <br>Saint Gabriel College
    //   <br>High School Diploma - Sciences and Mathematics Program, 3.77, 2007-2019
    //   <br>Chulalongkorn Mahawitthayalai
    //   <br>Bachelor of Engineering - Computer Engineering, 3.82, 2019 – 2022`,
    //   },
    //   data2: {
    //     src:
    //       "https://firebasestorage.googleapis.com/v0/b/web-app-1-f4f1d.appspot.com/o/aboutMe%2Faboutme4.jpg?alt=media",
    //     title: "Programmer",
    //     descripiton1: `
    //     Programming Language
    //     <br>- Java
    //     <br>- Python
    //     <br>- JavaScript/ Appscript
    //     <br>- C/ C++
    //     <br>- HTML/CSS
    //     <br>- Dart (Beginner)`,
    //     span: true,
    //     descripiton2: `
    //     Framework
    //     <br>- React.js
    //     <br>- Flutter (Beginner)`,
    //   },
    //   data3: {
    //     right: true,
    //     src:
    //       "https://firebasestorage.googleapis.com/v0/b/web-app-1-f4f1d.appspot.com/o/aboutMe%2Faboutme3.jpg?alt=media",
    //     title: "Tutor",
    //     descripiton1: `experienced in teaching in field of physics and mathematics"
    //       span
    //       descripiton2="Award
    //       <br>- PAT1 244/300
    //       <br>- PAT3 262/300
    //       <br>- 9 วิชาสามัญ ฟิสิกส์ 84
    //       <br>- 9 วิชาสามัญ ฟิสิกส์ 96`,
    //   },
    //   data4: {
    //     src:
    //       "https://firebasestorage.googleapis.com/v0/b/web-app-1-f4f1d.appspot.com/o/aboutMe%2Faboutme2.jpg?alt=media",
    //     title: "Photographer",
    //     descripiton1: `Member of Cu Photo Club
    //       <br>- Canon EOS Rp
    //       <br>- Canon AE-1`,
    //     span: true,
    //     descripiton2: `Skill
    //       <br>- Adobe Photoshop
    //       <br>- Adobe Lightroom
    //       <br>- Adobe Illustrator
    //       <br>- Adobe Premiere Pro (Beginner)`,
    //   },
    // };

    // const timePeriod = Object.keys(data).map((data, index) => {
    //   return (
    //     <TimePeriod
    //       right={data["right"]}
    //       src={data["src"]}
    //       title={data["title"]}
    //       descripiton1={data["descripiton1"]}
    //       span={data["span"]}
    //       descripiton2={data["descripiton2"]}
    //     />
    //   );
    // });

    return (
      <div
        ref={this.myRef}
        onScroll={this.onScrollHandler}
        className={classes.AboutPage}
        onClick={this.onScrollHandler}
      >
        <TopicImage coverImage="https://firebasestorage.googleapis.com/v0/b/my-web-89e77.appspot.com/o/PortfolioWeb%2Faboutme_cover.jpg?alt=media">
          About Us
        </TopicImage>

        <TimePeriod
          right
          src="https://firebasestorage.googleapis.com/v0/b/my-web-89e77.appspot.com/o/PortfolioWeb%2Faboutme5.jpg?alt=media"
          title="Unname"
          descripiton1="
          "
          span
          descripiton2=""
        />

        {/* <div className={classes.indicatorContainer}>
          <span style={{ width: `${this.state.percentHeight}%` }} />
        </div> */}
      </div>
    );
  }
}

export default AboutPage;
