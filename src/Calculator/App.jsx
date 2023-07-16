// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Display from "./Display.jsx";
import Keypad from "./Keypad.jsx";
import "./App.css";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [readyForSecondOperand, setReadyForSecondOperand] = useState(false);
  // eslint-disable-next-line no-unused-vars

  const [resultValue, setResultValue] = useState("");

  const inputDigit = (digit) => {
    if (readyForSecondOperand) {
      setDisplayValue(String(digit));
      setReadyForSecondOperand(false);
    } else {
      setDisplayValue(
        displayValue === "0" ? String(digit) : displayValue + digit
      );
    }
  };

  const inputDecimal = () => {
    if (readyForSecondOperand) {
      setDisplayValue("0.");
      setReadyForSecondOperand(false);
    } else if (displayValue.indexOf(".") === -1) {
      setDisplayValue(displayValue + ".");
    }
  };

  const clearDisplay = () => {
    setDisplayValue("0");
    setFirstOperand(null);
    setOperator(null);
    setReadyForSecondOperand(false);
    setResultValue("");
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (operator && readyForSecondOperand) {
      setOperator(nextOperator);
      return;
    }

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);

      setDisplayValue(String(result));
      setFirstOperand(result);
      setResultValue(String(result));
    }

    setReadyForSecondOperand(true);
    setOperator(nextOperator);
    setDisplayValue("");
  };

  const calculate = (firstOperand, secondOperand, operator) => {
    if (operator === "+") {
      return firstOperand + secondOperand;
    } else if (operator === "-") {
      return firstOperand - secondOperand;
    } else if (operator === "×") {
      return firstOperand * secondOperand;
    } else if (operator === "÷") {
      return firstOperand / secondOperand;
    }

    return secondOperand;
  };

  return (
    <div className="calculator">
      <Display
        displayValue={displayValue}
        resultValue={resultValue}
        setResultValue={setResultValue}
      />
      <Keypad
        inputDigit={inputDigit}
        inputDecimal={inputDecimal}
        clearDisplay={clearDisplay}
        performOperation={performOperation}
      />
    </div>
  );
};

export default Calculator;
