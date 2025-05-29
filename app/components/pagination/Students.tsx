import LeftMenu from "./LeftMenu";

export default function Students() {
    return (
        <>
            <div className={`students__container flex`}>
                <LeftMenu></LeftMenu>


                <div className={`students__content`}>
                    <h1>Students</h1>

                    <div className={`students__content--add-btn`}>
                        <button>+</button>
                    </div>

                    <div className={`students__content--list`}>
                    <table>
                        <thead className={`student__list--groups`}>
                            <tr>
                                <th><input type="checkbox" id="select_all_students" name="select_all_students" value="select"/></th>
                                <th>Group</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Birthday</th>
                                <th>Status</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody className={`student__list--groups`}>
                            <tr>
                                <td><input type="checkbox" name="select_student" value="select"/></td>
                                <td className={`group_student`}>Group A</td>
                                <td className={`name_students`}>Ivan Den</td>
                                <td className={`gender_students`}>Male</td>
                                <td className={`birthday_students`}>10.12.1990</td>
                                <td className={`status_students`}>Ready</td>
                                <td className={`options_students`}>Edit | Delete</td>
                            </tr>
                        </tbody>
                    </table>

                    </div>

                </div>
            </div>
        </>
    )
}