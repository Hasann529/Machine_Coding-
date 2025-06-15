import { useCallback, useRef, useState } from "react"
import useClickOutside from "../hooks/useCallbackOutside";
import '../App.css'

const Main =({isOpen , closeModal}:any)=>{
   const modalRef = useRef(null);
  useClickOutside(modalRef, closeModal);
  if (!isOpen) {
    return null;
  }
  return (
    <div
      aria-label="Modal"
      tabIndex={0}
      ref={modalRef}
      className="modal-container"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat soluta
        quo deleniti ipsa, dolor laboriosam nesciunt ullam, earum optio nemo
        corrupti dignissimos dolorum impedit quae officia atque. Eos, quia
        ipsam.
      </p>
      <button onClick={closeModal}>Close</button>
    </div>
  );
}


const Modal = () => {
     
   

 const [showModal, setShowModal] = useState(false);
  return (
     <div 
    style={{minHeight:"100vh" , width:"100vw" , background:"#901E3E" }}
    >
        <button onClick={() => {setShowModal(true) }}  >Open Modal</button>
        <Main isOpen={showModal}  closeModal={useCallback(() => setShowModal(false), [])}  />
      
    </div>
  )
}

export default Modal
