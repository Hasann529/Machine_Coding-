import { useState, useEffect } from "react";

const Cell = ({ X, globalSeq, setGlobalSeq }:any) => {
  const k = 3 * (X - 1);

  return (
    <div style={{ display: "flex" }}>
      {[k + 1, k + 2, k + 3].map((cell) => (
        <div
          key={cell}
          style={{
            width: "4rem",
            aspectRatio: "1/1",
            backgroundColor: globalSeq.includes(cell) ? "#7D0A0A" : "#F38C79",
            border: "4px solid white",
            margin: ".5rem",
            cursor: "pointer",
            transition: "background-color 0.2s ease",
          }}
          onClick={() => {
            setGlobalSeq((prev:any) => [...prev, cell]);
          }}
        ></div>
      ))}
    </div>
  );
};

const InteractiveShape = () => {
  const [globalSeq, setGlobalSeq] = useState([]);
  const totalCells = 9; // 3x3 grid

  const vanishingColor = () => {
    const id = setInterval(() => {
      setGlobalSeq((prev) => {
        if (prev.length === 0) {
          clearInterval(id);
          return prev;
        }
        return prev.slice(0, -1);
      });
    }, 200);
  };

  // Trigger vanish when all cells are clicked
  useEffect(() => {
    if (globalSeq.length === totalCells) {
      vanishingColor();
    }
  }, [globalSeq.length, totalCells]);

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#034C53",
      }}
    >
      <div>
        <Cell X={1} globalSeq={globalSeq} setGlobalSeq={setGlobalSeq} />
        <Cell X={2} globalSeq={globalSeq} setGlobalSeq={setGlobalSeq} />
        <Cell X={3} globalSeq={globalSeq} setGlobalSeq={setGlobalSeq} />
      </div>
    </div>
  );
};

export default InteractiveShape;