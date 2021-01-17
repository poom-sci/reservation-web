import React, { Component } from "react";
import classes from "./ContactPage.module.css";

import ContactData from "./ContactData/ContactData";
import TopicImage from "../../components/TopicImage/TopicImage";

class ContactPage extends Component {
  render() {
    let divClasses = [classes.ContactPage];

    return (
      <div className={divClasses.join(" ")}>
        <TopicImage coverImage="https://firebasestorage.googleapis.com/v0/b/my-web-89e77.appspot.com/o/PortfolioWeb%2Fcontact_cover.jpg?alt=media">
          Contact
        </TopicImage>
        <ContactData />
      </div>
    );
  }
}

export default ContactPage;
