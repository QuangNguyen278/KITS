// eslint-disable-next-line react-refresh/only-export-components, react/prop-types
const Timer = ({ time, status }) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="timer">
      <h2>{formattedTime}</h2>
      <h3>{status}</h3>
    </div>
  );
};
export default Timer;
