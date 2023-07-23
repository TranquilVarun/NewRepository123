/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertyLine = ({
  className,
  propertyLine = "https://generation-sessions.s3.amazonaws.com/a37d40030d2df3439a4157a82115dae7/img/property-1-line--property-2-small.svg",
}) => {
  return <img className={`property-line ${className}`} alt="Property line" src={propertyLine} />;
};

PropertyLine.propTypes = {
  propertyLine: PropTypes.string,
};
