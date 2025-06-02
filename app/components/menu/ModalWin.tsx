import ModalAddStudent from "./ModalAddStudent"
import "@/public/style/modal/_modal-add-stud.scss"




type ModalWinProps = {
    handleCloseModal: () => void;
  };

export default function ModalWin ({ handleCloseModal }: ModalWinProps) {
    return (
        <>
            <div onClick={handleCloseModal} className={`modal modal-active`}>
                <div onClick={(e) => e.stopPropagation()} className={`modal__container`}>
                    <div className="modal__container--content">
                        <ModalAddStudent />
                    </div>
                </div>
            </div>
        </>
    )
}