
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Timer from "./Timer.jsx";
import Controls from "./Control.jsx";
import Settings from "./Setting.jsx";
import "./App.css";

const App = () => {
  const [time, setTime] = useState(25 * 60);
  const [status, setStatus] = useState("Working");
  const [tw, setTw] = useState(25);
  const [tr, setTr] = useState(5);
  const [running, setRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            if (status === "Working") {
              setStatus("Resting");
              return tr * 60;
            } else {
              setStatus("Working");
              return tw * 60;
            }
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running, status, tw, tr]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const startTimer = () => {
    setRunning(true);
  };

  const stopTimer = () => {
    setRunning(false);
    setTime(tw * 60);
    setStatus("Working");
  };

  return (
    <div className="pomodoro-clock">
      <h1>Pomodoro Clock</h1>
      <p>Current Time: {currentTime.toLocaleTimeString()}</p>
      <Timer time={time} status={status} />
      <Controls
        startTimer={startTimer}
        stopTimer={stopTimer}
        running={running}
        setRunning={setRunning}
      />
      <Settings tw={tw} tr={tr} setTw={setTw} setTr={setTr} />
    
    </div>
  );
};
export default App;