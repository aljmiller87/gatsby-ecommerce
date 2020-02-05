import React from "react";
import PropTypes from "prop-types";

const Title = ({ title }) => {
  return (
    <div className="row">
      <div className="col text-center mb-3">
        <h2 className="display-4 text-capitalize font-weight-bold">{title}</h2>
      </div>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
