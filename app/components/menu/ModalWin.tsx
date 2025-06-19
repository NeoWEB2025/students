import { useState, useEffect } from "react";
import ModalAddStudent from "./ModalAddStudent"
import "@/public/style/modal/_modal-add-stud.scss"




type ModalWinProps = {
    handleCloseModal: () => void;
  };

export default function ModalWin ({ handleCloseModal }: ModalWinProps) {
    const [visible, setVisible] = useState(true);

    const closeWithAnimation = () => {
        setVisible(false);
        setTimeout(handleCloseModal, 300);
      };


      useEffect(() => {
        // Trigger fade-in AFTER initial render
        const timer = setTimeout(() => {
          setVisible(true);
        }, 10); // slight delay allows CSS transition to kick in
    
        return () => clearTimeout(timer);
      }, []);

      
    return (
        <>
            <div onClick={closeWithAnimation} className={`modal ${visible ? 'modal-active' : 'modal-inactive'}`}>
                <div onClick={(e) => e.stopPropagation()} className={`modal__container`}>
                    <div className="modal__container--content">
                        <ModalAddStudent onClose = {() => {
                            setVisible(false)
                        }}/>
                    </div>
                </div>
            </div>
        </>
    )
}