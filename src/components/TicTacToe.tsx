import { useEffect, useState } from "react";

const TicTacToe = () => {
  const [turn, setTurn] = useState(true);
  const [result , setResult] = useState<null|string>(null)

  const [grid, setGrid] = useState(
    Array.from({ length: 3 }, () => Array(3).fill(null))
  );

  const checkPuzzle = () => {
  // Check rows, columns, and diagonals
  const lines = [];

  // Rows and Columns
  for (let i = 0; i < 3; i++) {
    lines.push(grid[i]); // row
    lines.push([grid[0][i], grid[1][i], grid[2][i]]); // column
  }

  // Diagonals
  lines.push([grid[0][0], grid[1][1], grid[2][2]]);
  lines.push([grid[0][2], grid[1][1], grid[2][0]]);

  for (const line of lines) {
    if (line.every(cell => cell === true)) {
      setResult("O");
      return;
    } else if (line.every(cell => cell === false)) {
      setResult("X");
      return;
    }
  }

  // Check for draw (no null left)
  if (grid.flat().every(cell => cell !== null)) {
    setResult("Draw");
  }
};

  useEffect(() => {
    checkPuzzle()
  },[grid])



  const handleClick = (r:any, c:any) => {
      setGrid((prev) => {
                  const newGrid = prev.map(row => [...row]);
                  newGrid[r][c] = turn;
                  setTurn(!turn);
                  return newGrid;
                });
  
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#129990",
      }}
    >
      {grid.map((row, rIdx) => (
        <div style={{ display: "flex" }}>
          {row.map((col, cIdx) => (
            <div

              onClick={() => grid[rIdx][cIdx] === null && result === null  &&  handleClick(rIdx, cIdx) }

              style={{
                width: "5.5rem",
                height: "5.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #B33791",
                backgroundColor: "gray",
                color: "white",
                fontWeight: 600,
                fontSize: "2rem",
                margin: "1rem",
              }}
            >
              {grid[rIdx][cIdx] !== null && (grid[rIdx][cIdx] ? "O" : "X")}
            </div>
          ))}
        </div>
      ))}

      <div>
        {result !== null ?  <span>Won : {result}</span> :  <span>Turn : {turn ? "O" :"X"}</span>}
       
      </div>

      <div>
        <button onClick={() => {setGrid( Array.from({ length: 3 }, () => Array(3).fill(null))); setTurn(true) }} >Reset</button>
      </div>
    </div>
  );
};

export default TicTacToe;
