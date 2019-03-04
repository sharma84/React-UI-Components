import React from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import ClearButton from "./components/ButtonComponents/ClearButton";

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay />
      <ClearButton clear="clear" />
      <ActionButton action="&divide;" />
      <NumberButton number="7" />
      <NumberButton number="8" />
      <NumberButton number="9" />
      <ActionButton action="&times;" />
      <NumberButton number="4" />
      <NumberButton number="5" />
      <NumberButton number="6" />
      <ActionButton action="&minus;" />
      <NumberButton number="1" />
      <NumberButton number="2" />
      <NumberButton number="3" />
      <ActionButton action="&#43;" />
      <ClearButton clear="0" />
      <ActionButton action="&#61;" />
    </div>
  );
};
export default App;