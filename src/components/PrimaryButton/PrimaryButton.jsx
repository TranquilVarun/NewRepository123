/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PrimaryButton = ({ property1, className, signUpClassName }) => {
  return (
    <div className={`primary-button ${property1} ${className}`}>
      <div className={`sign-up ${signUpClassName}`}>
        {property1 === "yellow" && <>Sign up</>}

        {property1 === "green" && <>Get Appiontment</>}
      </div>
    </div>
  );
};

PrimaryButton.propTypes = {
  property1: PropTypes.oneOf(["yellow", "green"]),
};
