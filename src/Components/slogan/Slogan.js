import React, { useState } from "react";
import "./slogan.css";

export const Slogan = ({ slogan }) => {
  const [sloganState, setSloganState] = useState(false);
  return (
    <div
      onClick={() => setSloganState(true)}
      className="slogan fw-400"
      data-tooltip={sloganState ? "Copied!" : "Click to copy"}
    >
      {slogan}
    </div>
  );
};
