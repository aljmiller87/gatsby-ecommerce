import React from "react";
import { Link } from "gatsby";
import Title from "../global/Title";

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor amet austin prism irony celiac, polaroid organic
              venmo iceland thundercats literally everyday carry chicharrones.
              Distillery echo park disrupt, organic next level kogi pinterest
              blue bottle snackwave dreamcatcher. Photo booth vaporware
              letterpress mustache hell of tattooed brunch kinfolk tote bag.
            </p>
            <Link to="/about/">
              <button className="btn btn-yellow text-uppercase">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
