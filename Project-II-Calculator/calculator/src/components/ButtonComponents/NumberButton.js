import React from "react";
import "./Button.css";

function NumberButton(props) {
  return <button className="number-button">{props.number}</button>;
}

export default NumberButton;
