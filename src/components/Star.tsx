import { StarFilled } from "@ant-design/icons";
import { useState } from "react";

const Star = () => {
  const [hoveredStar, setHoveredStar] = useState(0);
  const [clickedStar, setClickedStar] = useState(0);

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", gap: "1rem" }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
          <StarFilled
            key={star}
            style={{
              color: star <= hoveredStar ? "yellow" : "black",
              fontSize: "32px",
              cursor: "pointer",
            }}
            onClick={() => setClickedStar(star)}
            onMouseEnter={() => setHoveredStar(star)}
            onMouseLeave={() => setHoveredStar(clickedStar)}
          />
        ))}
      </div>
    </div>
  );
};

export default Star;
