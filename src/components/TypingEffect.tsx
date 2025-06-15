import { useEffect, useRef, useState } from "react";


const TypingEffect = () => {
    const text = "I'm Frontend Developer."
    
    const [visibleText, setVisibleText] = useState(text)
    const Velocityref = useRef({
        speed:1,
        lastIndex:0
    })  

    useEffect(()=>{

      const interval =  setInterval(() => {
 if(Velocityref.current.lastIndex === text.length){
            Velocityref.current.speed = -1
        }
        else if(Velocityref.current.lastIndex == 0)
              Velocityref.current.speed = 1
             
        Velocityref.current.lastIndex += Velocityref.current.speed 

        setVisibleText(text.slice(0 , Velocityref.current.lastIndex))
        },100)

       
        
   return () =>{ clearInterval(interval)}
 
    },[])


  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "#901E3E",
        display: "flex",
        flexDirection:"column",
        gap:"2rem",
        justifyContent: "start",
        alignItems: "center",
        color: "white",
      }}
    >
      <h2>Typing Effect in react</h2>
      <h2>{visibleText}</h2>
    </div>
  );
};

export default TypingEffect;
