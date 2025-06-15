import { useEffect, useRef, useState } from "react";

const game = Array.from({ length: 30 }, () => new Array(30).fill(""));
const INITIAL_SNAKE = [
  [5, 12]
];

const generateFood = () => {
  const x = Math.floor(Math.random() * 30);
  const y = Math.floor(Math.random() * 30);

  return [x, y];
};


const Game = () => {
  

  const [snakeBody, setSnakeBody] = useState(INITIAL_SNAKE);

  const directionRef = useRef([1, 0]);
  const foodRef = useRef(generateFood());

  const isSnake = (x: any, y: any) => {
    return snakeBody.some(([a, b]) => a === x && b === y);
  };

  const isFood = (x: any, y: any) => {
    return foodRef.current[0] === x && foodRef.current[1] === y;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSnakeBody((prevSnakeBody) => {
      
        const newHead = [
          prevSnakeBody[0][0] + directionRef.current[0],
          prevSnakeBody[0][1] + directionRef.current[1],
        ];

        if (
           newHead[0] < 0 ||
          newHead[0] >= 30 ||
          newHead[1] < 0 ||
          newHead[1] >= 30 ||
          prevSnakeBody.some(([x, y]) => {
            return newHead[0] === x && newHead[1] === y;
          })
        ) {
          directionRef.current = [1, 0];
          return INITIAL_SNAKE;
        }

        

        const copySnakeBody = prevSnakeBody.map((Array) => [...Array]);

        if (
          newHead[0] === foodRef.current[0] &&
          newHead[1] === foodRef.current[1]
        ) {
          foodRef.current = generateFood();
        } else {
          copySnakeBody.pop();
        }

        copySnakeBody.unshift(newHead);

         
        return copySnakeBody;
      });
    }, 100);

    const handleDirection = (e: any) => {
      const key = e.key;
      if (key === "ArrowUp" && directionRef.current[1] !== 1) {
        directionRef.current = [0, -1];
      } else if (key === "ArrowLeft" && directionRef.current[0] !== 1) {
        directionRef.current = [-1, 0];
      } else if (key === "ArrowRight" && directionRef.current[0] !== -1) {
        directionRef.current = [1, 0];
      } else if (key === "ArrowDown" && directionRef.current[1] !== -1) {
        directionRef.current = [0, 1];
      }
    };

    window.addEventListener("keydown", handleDirection);
    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleDirection);
    };
  }, []);

  return (
    <div
      style={{
        width: "30rem",
        height: "30rem",
        border: "2px solid black",
        display: "grid",
        gridTemplateColumns: "repeat(30 , 1fr)",
      }}
    >
      {game.map((row, yc) =>
        row.map((_, xc) => (
          <div
            style={{
              borderRadius: isFood(xc, yc) ? "50%" : "0",
              backgroundColor: isSnake(xc, yc)
                ? "green"
                : isFood(xc, yc)
                ? "red"
                : "transparent",
            }}
          ></div>
        ))
      )}
    </div>
  );
};

const SnakeGame = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "white",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "start",
        alignItems: "center",
        color: "black",
      }}
    >
      <h1>Snake Game</h1>
      <Game />
    </div>
  );
};

export default SnakeGame;
