/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Logo = ({
  property1,
  className,
  property = "https://generation-sessions.s3.amazonaws.com/a37d40030d2df3439a4157a82115dae7/img/property-1-48px.svg",
  propertyPx = "https://generation-sessions.s3.amazonaws.com/a37d40030d2df3439a4157a82115dae7/img/property-1-36px.svg",
}) => {
  return (
    <img
      className={`logo ${property1} ${className}`}
      alt="Property"
      src={
        property1 === "fifty-six-px"
          ? "https://generation-sessions.s3.amazonaws.com/a37d40030d2df3439a4157a82115dae7/img/property-1-56px.svg"
          : property1 === "forty-eight-px"
          ? property
          : property1 === "thirty-six-px"
          ? propertyPx
          : property1 === "twenty-four-px"
          ? "https://generation-sessions.s3.amazonaws.com/a37d40030d2df3439a4157a82115dae7/img/property-1-24px.svg"
          : "https://generation-sessions.s3.amazonaws.com/a37d40030d2df3439a4157a82115dae7/img/property-1-64px.svg"
      }
    />
  );
};

Logo.propTypes = {
  property1: PropTypes.oneOf(["twenty-four-px", "forty-eight-px", "sixty-four-px", "thirty-six-px", "fifty-six-px"]),
  property: PropTypes.string,
  propertyPx: PropTypes.string,
};
