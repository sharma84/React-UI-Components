import React from "react";
import "./Button.css";

function ActionButton(props) {
  return <button className="action-button">{props.action}</button>;
}

export default ActionButton;