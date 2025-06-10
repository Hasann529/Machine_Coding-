import { useState } from "react"

const Step = ({step, index , show , activeStep}:any) =>{


    return(
    <div style={{display:"flex" , alignItems:"center" ,  gap:"3rem"}}>
      <div style={{height:"2.5rem" , width:"2.5rem",  position:"relative", borderRadius:"50%", fontWeight:600 , backgroundColor:`${activeStep >= index ? "#F38C79":"gray"}`, textAlign:"center" , display:"flex" , justifyContent:"center" , alignItems:"center" }}>{index}

          {show && <div style={{borderLeft:`4px solid ${activeStep > index ? "#F38C79" : "gray"}` , position:"absolute" , bottom:"-2.5rem" , height:"2.5rem"}}></div>}
      </div>
    
      <span style={{height:"fit-content" , color:"#F38C79", fontWeight:600 , fontSize:"1.5rem"}}>{step.label}</span>


    </div> )
}


const Implement = ({steps}:any) => {

  const  [activeStep , setActiveStep] = useState(1)
    
    return(
      <div style={{display:"flex" , alignItems:"center" , justifyContent:"space-between" , width:"70vw"}}>
            <div style={{display:"flex" , flexDirection:"column" , gap:"2.5rem"}}>
                {steps.map((step:any,index:any) => <Step step={step} index={index+1} show={steps.length !== index+1} activeStep={activeStep} />)}

            </div>
            <div style={{padding:"2rem 4rem" , fontSize:"1.25rem" , fontWeight:600 , width:"300px" , color:"#FCC6FF"}}>
                <span>{steps[activeStep-1].content}</span>
            </div>
            <div style={{display:"flex" , gap:"1rem"  , width:"200px"}}>
               {activeStep > 1 && <button style={{backgroundColor:"#FDAB9E" , width:"100px"}} onClick={() => setActiveStep(prev => prev-1)}>Previous</button>}
              {activeStep < steps.length &&  <button style={{backgroundColor:"#FDAB9E" , width:"100px"}} onClick={() => setActiveStep(prev => prev+1)}>Next</button>}
                </div>
        </div>
    )
}

const Stepper = () => {

const steps:any = [
  {
    label: "Introduction",
    content: <div>Welcome to the onboarding process. Let's get started by learning the basics.</div>,
  },
  {
    label: "Profile Setup",
    content: <div>Fill out your profile information so we can personalize your experience.</div>,
  },
  {
    label: "Preferences",
    content: <div>Select your preferences to tailor the platform to your needs.</div>,
  },
  {
    label: "Confirmation",
    content: <div>Review all the details and confirm to complete your setup.</div>,
  }
];


  return (
    <div 
     style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#129990",
      }}
    >
    <Implement steps={steps} />
       
    </div>
  )
}

export default Stepper
