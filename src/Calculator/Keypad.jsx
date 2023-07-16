/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Button from "./Button.jsx";
// eslint-disable-next-line react-hooks/rules-of-hooks

const Keypad = ({
  inputDigit,
  inputDecimal,
  clearDisplay,
  performOperation,
}) => {
  const [selectedOperator, setSelectedOperator] = useState(null);
  return (
    <div className="keypad">
      <Button className="digit" label="7" onClick={() => inputDigit(7)} />
      <Button className="digit" label="8" onClick={() => inputDigit(8)} />
      <Button className="digit" label="9" onClick={() => inputDigit(9)} />  
      <Button 
        className={`operator ${selectedOperator === "÷" ? "selected" : ""}`}
        label="÷"
        onClick={() => {
        performOperation("÷");
        setSelectedOperator("÷"); 
        }} 
      />
      <Button className="digit" label="4" onClick={() => inputDigit(4)} />
      <Button className="digit" label="5" onClick={() => inputDigit(5)} />
      <Button className="digit" label="6" onClick={() => inputDigit(6)} />
      <Button 
        className={`operator ${selectedOperator === "×" ? "selected" : ""}`}
        label="×"
        onClick={() => {
        performOperation("×");
        setSelectedOperator("×");
      }}/>
      <Button className="digit" label="1" onClick={() => inputDigit(1)} />
      <Button className="digit" label="2" onClick={() => inputDigit(2)} />
      <Button className="digit" label="3" onClick={() => inputDigit(3)} />
      <Button 
        className={`operator ${selectedOperator === "-" ? "selected" : ""}`}
        label="-"
        onClick={() => {
        performOperation("-");
        setSelectedOperator("-");
      }}/>
      <Button className="digit" label="0" onClick={() => inputDigit(0)} />
      <Button className="digit" label="." onClick={() => inputDecimal()} />
      <Button className="operator " label="AC" onClick={() => {clearDisplay()}} />
      <Button 
        className={`operator ${selectedOperator === "+" ? "selected" : ""}`}
        label="+"
        onClick={() => {
        performOperation("+");
        setSelectedOperator("+");
      }}/>
      <Button 
        className="operator" 
        label="="
        onClick={() => {
        performOperation("=");
        setSelectedOperator(null);
      }}/>
    </div>
  );
};

export default Keypad;
