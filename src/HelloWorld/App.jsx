import { useState } from "react";
import "./App.css";

const App = () => {
  const [info, setInfo] = useState("");
  const [remainingChars, setRemainingChars] = useState(50);
  const MAX_CHARS = 50;

  const handleChange = (event) => {
    const input = event.target.value;

    if (input.length > MAX_CHARS) {
      setRemainingChars(0);
      setInfo(input.slice(0, MAX_CHARS));
    } else {
      setRemainingChars(MAX_CHARS - input.length);
      setInfo(input);
    }
  };

  const handleClear = () => {
    setRemainingChars(MAX_CHARS);
    setInfo("");
  };

  return (
    <div className="container">
      <div className="input-container">
        <input
          className="input-text"
          value={info}
          onChange={handleChange}
          maxLength={MAX_CHARS}
          placeholder="Enter your text here"
        />
        <div className="displaytt">{info}</div>
        <div className="char-counter">
          {remainingChars}/{MAX_CHARS}
        </div>
        <button className="clear-button" onClick={handleClear}>
          Clear
        </button>
      </div>
      {remainingChars === 0 && (
        <div className="error-message">You have reached the maximum number of characters.</div>
      )}
    </div>
  );
};

export default App;