import ModalAddStudent from "./ModalAddStudent"
export default function ModalWin () {
    return (
        <>
            <div className={`modal`}>
                <div className={`modal__container`}>
                    <div className="modal__container--content">
                        <ModalAddStudent></ModalAddStudent>
                    </div>
                </div>
            </div>
        </>
    )
}