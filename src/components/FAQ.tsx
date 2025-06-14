import { useState } from "react";

const FAQ = () => {

    const [see ,setSee] = useState(-1)

   const [qaList, setQaList] = useState([
    {
      question: "What is the capital of France?",
      answer: "The capital of France is Paris.\nIt is also known as the City of Light.",
      isVisible: false
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      answer: "The play was written by William Shakespeare.\nIt’s one of his most famous tragedies.",
      isVisible: false
    },
    {
      question: "What is the boiling point of water in Celsius?",
      answer: "Water boils at 100 degrees Celsius.\nThis is under standard atmospheric pressure.",
      isVisible: false
    },
    {
      question: "What planet is known as the Red Planet?",
      answer: "Mars is called the Red Planet.\nThe red color comes from iron oxide on its surface.",
      isVisible: false
    },
    {
      question: "What is the largest mammal in the world?",
      answer: "The Blue Whale is the largest mammal.\nIt can grow up to 100 feet in length.",
      isVisible: false
    },
    {
      question: "What is the square root of 64?",
      answer: "The square root of 64 is 8.\nBecause 8 multiplied by 8 equals 64.",
      isVisible: false
    },
    {
      question: "Who painted the Mona Lisa?",
      answer: "Leonardo da Vinci painted the Mona Lisa.\nIt’s displayed in the Louvre Museum in Paris.",
      isVisible: false
    },
    {
      question: "What is the chemical symbol for Gold?",
      answer: "The symbol for Gold is Au.\nIt comes from the Latin word 'Aurum'.",
      isVisible: false
    },
    {
      question: "What is the longest river in the world?",
      answer: "The Nile is often considered the longest river.\nIt flows through northeastern Africa.",
      isVisible: false
    },
    {
      question: "What year did World War II end?",
      answer: "World War II ended in 1945.\nIt marked the victory of the Allies over the Axis powers.",
      isVisible: false
    }
  ]);

  return (
    <div 
    style={{minHeight:"100vh" , width:"100vw" , background:"#901E3E" , display:"flex" , justifyContent:"center" , alignItems:"center" }}
    >
        <div style={{width:"60%", fontSize:"1.5rem" , display:"flex" , flexDirection:"column" , gap:".3rem"}} >
            {qaList.map((item , index) => <div style={{position:"relative" , display:"flex" , flexDirection:"column" , gap:"1rem" , border:"2px solid gray" ,borderRadius:"3px" }} >
                <span>{item.question}</span>
              {see === index &&  <span>{item.answer}</span>}
                <div onClick={() => { setSee(prev => prev === index ? -1 : index  ) } }  style={{height:"100%" , position:"absolute" , right:"1rem" , cursor:"pointer" , display:"flex" , alignItems:"center" , justifyContent:"center"  }} >{see === index ? "-" : "+"}</div>
            </div> )}
        </div>
      
    </div>
  )
}

export default FAQ
