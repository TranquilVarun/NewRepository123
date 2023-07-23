/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Icon = ({
  property1,
  className,
  propertyFacebook = "https://generation-sessions.s3.amazonaws.com/a37d40030d2df3439a4157a82115dae7/img/property-1-facebook.svg",
  propertyYoutube = "https://generation-sessions.s3.amazonaws.com/a37d40030d2df3439a4157a82115dae7/img/property-1-youtube.svg",
}) => {
  return (
    <img
      className={`icon ${property1} ${className}`}
      alt="Property instgram"
      src={
        property1 === "twitter"
          ? "https://generation-sessions.s3.amazonaws.com/a37d40030d2df3439a4157a82115dae7/img/property-1-twitter.svg"
          : property1 === "facebook"
          ? propertyFacebook
          : property1 === "youtube"
          ? propertyYoutube
          : "https://generation-sessions.s3.amazonaws.com/a37d40030d2df3439a4157a82115dae7/img/property-1-instgram.svg"
      }
    />
  );
};

Icon.propTypes = {
  property1: PropTypes.oneOf(["youtube", "instgram", "facebook", "twitter"]),
  propertyFacebook: PropTypes.string,
  propertyYoutube: PropTypes.string,
};
