import { useEffect, useRef, useState } from "react";

const Carousel = () => {
  const [count, setCount] = useState(1);
  const intref = useRef<any>(null);

  const landscapeImages: any = {
    1: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg", // Mountain Lake at Sunrise
    2: "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg", // Scenic Road into the Mountains
    3: "https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg", // Unique: Snowy Mountain Range
    4: "https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg", // Forest Stream with Rocks
    5: "https://images.pexels.com/photos/355747/pexels-photo-355747.jpeg", // Sunset Over the Ocean
    6: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg", // Desert Dunes
    7: "https://images.pexels.com/photos/34950/pexels-photo.jpg", // Green Hills and Blue Sky
    8: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg", // Autumn Forest Path
    9: "https://images.pexels.com/photos/355747/pexels-photo-355747.jpeg", // Rocky Coastline (same as 5)
    10: "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg", // Starry Night Sky
  };

  useEffect(() => {
      intref.current = setInterval(() => {
        setCount((prev) => (prev === 10 ? 1 : prev + 1));
      }, 2000);
 

    return () => {clearInterval(intref.current)};
  
  }, [])

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{ width: "100%", height: "80%", position: "relative" }}
        onMouseEnter={() => clearInterval(intref.current)}
        onMouseLeave={() =>   intref.current = setInterval(() => {
        setCount((prev) => (prev === 10 ? 1 : prev + 1));
      }, 2000)  }
      >
        <button
          onClick={() => setCount((prev) => (prev == 1 ? 10 : prev - 1))}
          style={{
            position: "absolute",
            left: 3,
            top: "45%",
            opacity: "70%",
            fontSize: "1.2rem",
          }}
        >
          &lsaquo;
        </button>
        <img
          style={{ width: "100%", height: "100%" }}
          src={landscapeImages[count]}
          alt="img"
        />
        <button
          onClick={() => setCount((prev) => (prev == 10 ? 1 : prev + 1))}
          style={{
            position: "absolute",
            right: 3,
            top: "45%",
            opacity: "70%",
            fontSize: "1.2rem",
          }}
        >
          &rsaquo;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
