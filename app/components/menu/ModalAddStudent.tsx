export default function ModalAddStudent() {
    return (
        <>
            <div className={`modal__header--add-stud flex`}>
                <h1>Add student</h1>

                <button className={`btn-exit`}>
                    <span>&#10005;</span>
                </button>
            </div>
            
            
            <form className={`modal__form--add-stud flex`} action="#">
                <div className="modal__form--add-stud-group">
                    <label htmlFor="group-select">Select your group:</label>
                    <select name="group" id="group-select">
                        <option value="KN-11">KN-11</option>
                        <option value="KN-21">KN-21</option>
                        <option value="KN-31">KN-31</option>
                        <option value="KN-41">KN-41</option>
                    </select>
                </div>

                <div className="modal__form--add-stud-name">
                    <label htmlFor="name-select">First name:</label>
                    <input type="text" name="name" id="name-select"/>
                </div>


                <div className="modal__form--add-stud-lastname">
                    <label htmlFor="last-name-select">Last name:</label>
                    <input type="text" name="LastName" id="last-name-select"/>
                </div>

                <div className="modal__form--add-stud-gender">
                    <label htmlFor="gender-select">Select your gender:</label>
                    <select name="gender" id="gender-select">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <div className="modal__form--add-stud-birthday">
                    <label htmlFor="birthday-select">Your birthday:</label>
                    <input type="date" name="birthday" id="birthday-select"/>
                </div>
            </form>



            <div className={`modal__footer--add-stud flex`}>
                <h1>Make your choice</h1>

                <div className={`modal__footer--add-stud-save flex`}>
                    <button className={`btn-cancel`}>
                        Cancel
                    </button>
                    <button className={`btn-save`}>
                        Save
                    </button>
                </div>
            </div>
        </>
    )
} 