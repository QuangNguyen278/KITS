import "./App.css";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function App() {
  const [boardSize, setBoardSize] = useState(4);
  const [board, setBoard] = useState(
    Array.from({ length: boardSize }, (row, rowIndex) =>
      Array.from({ length: boardSize }, (cell, cellIndex) =>
        (cellIndex + rowIndex) % 2 === 0 ? "even" : "odd"
      )
    )
  );
  const [whiteColor, setWhiteColor] = useState("whte");
  const [blackColor, setBlackColor] = useState("black");

  const handleBoardSizeChange = (event) => {
    const size = parseInt(event.target.value);
    setBoardSize(size);
  };

  const handleAddCells = () => {
    const newBoard = Array.from({ length: boardSize }, (row, rowIndex) =>
      Array.from({ length: boardSize }, (cell, cellIndex) =>
        (rowIndex + cellIndex) % 2 === 0 ? "even" : "odd"
      )
    );
    setBoard(newBoard);
  };

  return (
    <>
      <div>
        <label htmlFor="boardSizeInput">Board Size:</label>
        <input
          id="boardSizeInput"
          type="number"
          value={boardSize}
          onChange={handleBoardSizeChange}
        />
        <button className="btchess" onClick={handleAddCells}>
          Add Cells
        </button>
      </div>
      <div>
        <label htmlFor="whiteColorInput"> Cell Color:</label>
        <input
          id="whiteColorInput"
          type="color"
          value={whiteColor}
          onChange={(event) => setWhiteColor(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="blackColorInput"> Cell Color:</label>
        <input
          id="blackColorInput"
          type="color"
          value={blackColor}
          onChange={(event) => setBlackColor(event.target.value)}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <div className="board">
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((cell, cellIndex) => (
                <div
                  key={`${rowIndex}-${cellIndex}`}
                  className={`cell`}
                  style={{
                    backgroundColor: cell === "even" ? blackColor : whiteColor,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
