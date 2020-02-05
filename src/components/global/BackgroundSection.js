import React from "react";
import BackgroundImage from "gatsby-background-image";

const BackgroundSection = ({ img, styleClass, title, children }) => {
  return (
    <BackgroundImage Tag="section" className={styleClass} fluid={img}>
      <p>this is background section</p>
    </BackgroundImage>
  );
};

export default BackgroundSection;
