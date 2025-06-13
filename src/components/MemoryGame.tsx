import { useEffect, useState } from "react";

const generateGrid = () => {
  const base = Array.from({ length: 18 }, (_, index) => index + 1);
  const grid = [...base, ...base].sort(() => Math.random() - 0.5);

  return grid.map((item, ind) => ({ id: ind, number: item, isFlipped: false }));
};

const MemoryGame = () => {
  const [cards, setCards] = useState<any[]>(generateGrid());
  const [pair, setPair] = useState({ first: null, second: null });

  const handleClick = (id:any) => {
    setCards((prev) => {
      const inter = [...prev];
      inter[id].isFlipped = true;
    
      return inter;
    });
      setPair((prev) =>
        prev.first === null ? { ...prev, first: id } : { ...prev, second: id }
      );
  };

  const checkNumbers = () => {
    
    if (cards[pair.first as unknown as number].number != cards[pair.second as unknown as number].number) {
      setCards((prev) => {
        const inter = [...prev];
        inter[pair.first as unknown as number].isFlipped = false;
        inter[pair.second as unknown as number].isFlipped = false;
        return inter;
    });
}
setPair({first:null , second:null})
     
  };

  useEffect(() => {
    console.log(pair , "Pair")
    if (pair.second !== null) {
      setTimeout(checkNumbers, 3000);
    }
  }, [pair]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor:"#819A91"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6 , 1fr)",
          width: "30rem",
          height: "30rem",
        }}
      >
        {cards.map(({ id, number, isFlipped }) => (
          <div
          key={id}
            style={{
              width: "4rem",
              height: "4rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid white",
              fontSize: "1.75rem",
              fontWeight: 600,
              cursor: "pointer",
              backgroundColor: isFlipped ?"#725CAD" : "#C562AF",
              borderRadius:"7px"
            }}
            onClick={() => {
              if(cards[id].isFlipped) return  
              if (pair.first !== null && pair.second !== null) return;
              handleClick(id);
            }}
          >
            {isFlipped ? number : "?"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
