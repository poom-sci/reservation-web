import React from "react";

import classes from "./FooterSocial.module.css";
import facebookLogo from "../../../../assets/social/facebook.png";
import instagramLogo from "../../../../assets/social/instagram.png";
import mailLogo from "../../../../assets/social/mail.png";
import githubLogo from "../../../../assets/social/github.png";
import linkinedLogo from "../../../../assets/social/linkined.png";

const socialFooterData = {
  data1: {
    alt: "facebookLogo",
    link: "https://www.facebook.com/poom.suchaoin/",
    image: facebookLogo,
  },
  data2: {
    alt: "instagramLogo",
    link: "https://www.instagram.com/poom.sci/",
    image: instagramLogo,
  },
  data3: {
    alt: "mailLogo",
    link: "mailto:poom.suchaoin@gmail.com",
    image: mailLogo,
  },
  data4: {
    alt: "githubLogo",
    link: "https://github.com/poom-sci",
    image: githubLogo,
  },
  data5: {
    alt: "linkinedLogo",
    link: "https://www.linkedin.com/in/poom-sci/",
    image: linkinedLogo,
  },
};

const Icons = Object.keys(socialFooterData).map((data) => {
  return (
    <a href={socialFooterData[data].link} key={data}>
      <img src={socialFooterData[data].image} alt={socialFooterData[data].alt}/>
    </a>
  );
});

const footerSocial = (props) => (
  <div className={classes.FooterSocial}>
    {Icons}
  </div>
);

export default footerSocial;
