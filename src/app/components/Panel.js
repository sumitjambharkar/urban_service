import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Panel = ({ name }) => {
  return (
    <div className="panel">
      <li>Home</li>
      <KeyboardDoubleArrowRightIcon />
      <li>{name}</li>
    </div>
  );
};

export default Panel;
