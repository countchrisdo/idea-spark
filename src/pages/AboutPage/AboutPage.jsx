import React, { Component } from "react";
import LandingPage from "../../pages/LandingPage/LandingPage";
import "./AboutPage.css"

export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <LandingPage />

        <div className="about">
          <div className="row">
            <div className="col-md-12">
              <h2>
                 Idea Spark is
                a brand new destination to view and share your ideas with the
                world! Create a board full of images to invoke your ideas and
                stir your creativity.
                <br />
                <br />
                For the person who needs to curate their spring/summer vs.
                fall/winter aesthetique. For the person upgrading their interior
                design to a Scandinavian post-modern architecture that doesn't
                scream "IKEA". But mainly for the person trying to draw
                inspiration from a bunch of images mish-mashed together in a
                semi-random, pleasing manner.
              </h2>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
