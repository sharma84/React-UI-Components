import React from "react";
import "./Button.css";

function ClearButton(props) {
  return <button className="clear-button">{props.clear}</button>;
}

export default ClearButton;
