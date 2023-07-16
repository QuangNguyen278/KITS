/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Display = ({
  displayValue,
  setInputValue,
  resultValue,
  setResultValue,
}) => {
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setResultValue("");
  };

  return (
    <div className="display">
      <div
        className="input-value"
        contentEditable={true}
        onInput={handleInputChange}
      >
        {displayValue}
      </div>
      <div className="result">{resultValue}</div>
    </div>
  );
};

export default Display;
