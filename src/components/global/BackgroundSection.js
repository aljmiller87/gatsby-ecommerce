import React from "react";
import PropTypes from "prop-types";
import BackgroundImage from "gatsby-background-image";

const BackgroundSection = ({ img, styleClass, title, children }) => {
  return (
    <BackgroundImage Tag="section" className={styleClass} fluid={img}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  );
};

BackgroundSection.propTypes = {
  title: PropTypes.string,
  styleClass: PropTypes.string,
};

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
};

export default BackgroundSection;
