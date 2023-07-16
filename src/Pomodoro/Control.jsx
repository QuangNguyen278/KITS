// eslint-disable-next-line react/prop-types
const Controls = ({ startTimer, stopTimer, running, setRunning }) => {
  const handlePauseResume = () => {
    setRunning(!running);
  };

  return (
    <div className="controls">
      {running ? (
        <button onClick={handlePauseResume}>Pause</button>
      ) : (
        <button onClick={handlePauseResume}>Resume</button>
      )}
      <button onClick={stopTimer}>Stop</button>
      <button onClick={startTimer}>Start</button>
    </div>
  );
};
export default Controls;
