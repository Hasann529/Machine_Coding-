import { useState } from "react";

const Pagination = () => {
  const [curr, setCurr] = useState(1);

  const data:any = {
    1: [
      "https://picsum.photos/200/300?random=1",
      "https://picsum.photos/200/300?random=2",
      "https://picsum.photos/200/300?random=3",
      "https://picsum.photos/200/300?random=4",
      "https://picsum.photos/200/300?random=5",
    ],
    2: [
      "https://picsum.photos/200/300?random=6",
      "https://picsum.photos/200/300?random=7",
      "https://picsum.photos/200/300?random=8",
      "https://picsum.photos/200/300?random=9",
      "https://picsum.photos/200/300?random=10",
    ],
    3: [
      "https://picsum.photos/200/300?random=11",
      "https://picsum.photos/200/300?random=12",
      "https://picsum.photos/200/300?random=13",
      "https://picsum.photos/200/300?random=14",
      "https://picsum.photos/200/300?random=15",
    ],
    4: [
      "https://picsum.photos/200/300?random=16",
      "https://picsum.photos/200/300?random=17",
      "https://picsum.photos/200/300?random=18",
      "https://picsum.photos/200/300?random=19",
      "https://picsum.photos/200/300?random=20",
    ],
    5: [
      "https://picsum.photos/200/300?random=21",
      "https://picsum.photos/200/300?random=22",
      "https://picsum.photos/200/300?random=23",
      "https://picsum.photos/200/300?random=24",
      "https://picsum.photos/200/300?random=25",
    ],
    6: [
      "https://picsum.photos/200/300?random=26",
      "https://picsum.photos/200/300?random=27",
      "https://picsum.photos/200/300?random=28",
      "https://picsum.photos/200/300?random=29",
      "https://picsum.photos/200/300?random=30",
    ],
    7: [
      "https://picsum.photos/200/300?random=31",
      "https://picsum.photos/200/300?random=32",
      "https://picsum.photos/200/300?random=33",
      "https://picsum.photos/200/300?random=34",
      "https://picsum.photos/200/300?random=35",
    ],
    8: [
      "https://picsum.photos/200/300?random=36",
      "https://picsum.photos/200/300?random=37",
      "https://picsum.photos/200/300?random=38",
      "https://picsum.photos/200/300?random=39",
      "https://picsum.photos/200/300?random=40",
    ],
    9: [
      "https://picsum.photos/200/300?random=41",
      "https://picsum.photos/200/300?random=42",
      "https://picsum.photos/200/300?random=43",
      "https://picsum.photos/200/300?random=44",
      "https://picsum.photos/200/300?random=45",
    ],
    10: [
      "https://picsum.photos/200/300?random=46",
      "https://picsum.photos/200/300?random=47",
      "https://picsum.photos/200/300?random=48",
      "https://picsum.photos/200/300?random=49",
      "https://picsum.photos/200/300?random=50",
    ],
  };

  const baseButtonStyle : React.CSSProperties = {
       outline:"none"
  }

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        gap: "3rem",
      }}
    >
      <div style={{display:"flex" ,gap:"1rem" ,  justifyContent:"space-between"}}>
        {data[curr].map((sr:any) => (
          <img src={sr} alt="image" />
        ))}
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        {curr > 1 && <button style={baseButtonStyle}  onClick={() => setCurr(curr - 1)}> « </button>}

        {[3, 2, 1].map(
          (cnt) =>
            curr - cnt > 0 && (
              <button style={baseButtonStyle} onClick={() => setCurr(curr - cnt)}>
                {" "}
                {curr - cnt}{" "}
              </button>
            )
        )}
        <button
          style={{
            backgroundColor: "transparent",
            border: "1px solid black",
            color: "black",
          }}
        >
          {" "}
          {curr}{" "}
        </button>
        {[1, 2, 3].map(
          (cnt) =>
            curr + cnt <= 10 && (
              <button style={baseButtonStyle}  onClick={() => setCurr(curr + cnt)}>
                {" "}
                {curr + cnt}{" "}
              </button>
            )
        )}

        {curr < 10 && <button style={baseButtonStyle}  onClick={() => setCurr(curr + 1)}> » </button>}
      </div>
    </div>
  );
};

export default Pagination;
