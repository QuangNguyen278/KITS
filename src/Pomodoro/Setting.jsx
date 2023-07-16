// eslint-disable-next-line react/prop-types
const Settings = ({ tw, tr, setTw, setTr }) => {
  return (
    <div className="settings">
      <label>
        Work Time (minutes)
        <input
          type="number"
          value={tw}
          onChange={(e) => setTw(e.target.value)}
        />
      </label>
      <label>
        Rest Time (minutes)
        <input
          type="number"
          value={tr}
          onChange={(e) => setTr(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Settings;
