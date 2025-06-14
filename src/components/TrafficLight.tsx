import { useEffect, useState } from "react"

const TrafficLight = () => {

    const [active, setActive] = useState<string>("Green")

    useEffect(() => {
       setInterval(() => setActive(prev => prev=="Green" ? "Yellow" : prev == "Yellow" ? "Red" : "Green") , 2000)
    },[])

  return (
    <div 
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        gap:"4rem"
      }}
    >
        {["Green" , "Yellow" , "Red"].map(item => <div style={{borderRadius:"50%" , height:"4rem" , width:"4rem" , backgroundColor:  active === item ? active : "Gray" , border:"2px solid black" }} >
 
        </div> )}
      
    </div>
  )
}

export default TrafficLight
