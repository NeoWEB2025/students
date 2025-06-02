import ModalAddStudent from "./ModalAddStudent"


type ModalWinProps = {
    handleCloseModal: () => void;
  };

export default function ModalWin ({ handleCloseModal }: ModalWinProps) {
    return (
        <>
            <div onClick={handleCloseModal} className={`modal`}>
                <div onClick={(e) => e.stopPropagation()} className={`modal__container`}>
                    <div className="modal__container--content">
                        <ModalAddStudent />
                    </div>
                </div>
            </div>
        </>
    )
}