import { useEffect, useRef, useState } from "react";

const ProgressBar = () => {
  const [wid, setWid] = useState(0);
  const [start, setStart] = useState(false);
  const id = useRef(0);

  useEffect(() => {
    if (wid <= 100)
      id.current = setInterval(() => setWid((prev) => prev + 2), 100);

    return () => clearInterval(id.current);
  }, [wid]);

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100vw",
        height: "100vh",
        paddingTop: "10rem",
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        alignItems: "center",
      }}
    >
      {start && (
        <div
          style={{
            width: "20rem",
            height: "2.5rem",
            borderRadius: "30px",
            border: "1px solid gray",
            overflow: "clip",
          }}
        >
          <div
            style={{
              backgroundColor: "greenyellow",
              height: "100%",
              width: `${wid}%`,
            }}
          ></div>
        </div>
      )}
      <button
        style={{ height: "3rem", display: "block" }}
        onClick={() => {
          setStart((prev) => !prev);
          setWid(0);
        }}
      >
        Toggle
      </button>
    </div>
  );
};

export default ProgressBar;
