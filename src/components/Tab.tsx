
import { useState } from "react"



const Tab = () => {
    const Tabs:any = {
        Profile:<div>Profile Info content</div>,
           Dashboard:<div>Dashboard Info content</div>,
               Settings:<div>Settings Info content</div>,
                   Invoice:<div>Invoice Info content</div>
    }

    const [activeTab , setActiveTab] = useState(Object.keys(Tabs)[0])
  return (
    <div style={{
         display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#129990",
    }}>
        <div style={{display:"flex" , flexDirection:"column" , width:"600px" , height:"400px" , border:"1px solid green"}}>
      <div style={{width:"100%" , border:"1px solid gray" , background:"white" , display:"flex" , color:"#F7374F"}    }>{Object.keys(Tabs).map(tab => <div onClick={() => setActiveTab(tab)} style={{width:`${100/Object.keys(Tabs).length}%` , border:"2px solid gray" , cursor:"pointer" , backgroundColor:`${tab === activeTab ? "#F49BAB" : "transparent"}`}}>{tab}</div> ) }</div>
      <div style={{width:"100%", display:"flex"  , flex:1  ,  alignItems:"center" , justifyContent:"center" , backgroundColor:"#648DB3"}}>
              <span>{Tabs[activeTab]}</span>
      </div>
      </div>
    </div>
  )
}

export default Tab
