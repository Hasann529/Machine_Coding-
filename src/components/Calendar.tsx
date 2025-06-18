
const Calendar = () => {
   
    const time = Array.from({length:24} , (_ , index) => index)
    const event = [
  {
    "id": 1,
    "title": "Morning Meeting",
    "start": "09:00:00",
    "end": "10:00:00"
  },
  {
    "id": 2,
    "title": "Lunch Break",
    "start": "12:00:00",
    "end": "13:00:00"
  },
  {
    "id": 4,
    "title": "Team Sync",
    "start": "10:30:00",
    "end": "11:30:00"
  },
  {
    "id": 5,
    "title": "Client Call",
    "start": "14:00:00",
    "end": "15:00:00"
  },
  {
    "id": 6,
    "title": "Evening Review",
    "start": "16:00:00",
    "end": "17:00:00"
  },
  {
    "id": 7,
    "title": "Dinner with Team",
    "start": "18:00:00",
    "end": "19:00:00"
  }
]

  return (
    <div 
     style={{ backgroundColor:"white" , color:"black" , position:"relative" }}
    >
      {time.map(t => <div style={ {  height:"5rem" , textAlign:"start" , borderBottom:"1px solid gray"}}>{t}:00
     
           
      </div>  )}
      <div style={{position:"absolute" , left:"5rem" , top:0 , borderLeft:"1px solid black" ,  height: "100%",}}></div>
      {event.map(en => 
{ 
        const startHour = Number(en.start.split(":")[0])
        const startMin = Number(en.start.split(":")[1])
        const endHour = Number(en.end.split(":")[0])
        const endMin = Number(en.end.split(":")[1])

        console.log(startHour , startMin , endHour , endMin)

        const top = startHour*5 + (startMin/60)*5
        const height = endHour*5 + (endMin/60)*5 - top

        console.log("dcsdc" , top , height)

      return  <div style={{ textAlign:"center" , position:"absolute", top: startHour*0.05 + top+"rem" , left:"6rem" ,height:height+"rem" ,  width:"calc(100% - 7rem)" , background:"#A2AADB"}} >
            {en.title}
        </div>}
       )}
   
    </div>
  )
}

export default Calendar
