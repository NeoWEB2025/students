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
                        <thead className={`students__list--groups`}>
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
                        <tbody className={`students__list--groups`}>
                            <tr>
                                <td><input type="checkbox" name="select_student" value="select"/></td>
                                <td className={`group_student`}>Group A</td>
                                <td className={`name_students`}>Ivan Den</td>
                                <td className={`gender_students`}>Male</td>
                                <td className={`birthday_students`}>10.12.1990</td>
                                <td className={`status_students ready`}></td>
                                <td className={`options_students flex`}>
                                    <div className={`option_students--change`}>
                                        <button>
                                                <svg fill="#fff" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 476.2 476.2">
                                        <g>
                                            <g>
                                                <path d="M433.812,19.9c-12.8-12.8-29.8-19.9-48-19.9s-35.1,7.1-48,19.9c-4.7,4.7-4.7,12.3,0,17c4.7,4.7,12.3,4.7,17,0
                                                    c8.3-8.3,19.3-12.8,31-12.8s22.7,4.6,31,12.8c17.1,17.1,17.1,44.9,0,62c-0.3,0.3-0.6,0.6-0.8,0.9c-0.3,0.3-0.6,0.5-0.9,0.8
                                                    l-18.2,18.2l-101.2-101.1c-4.7-4.7-12.3-4.7-17,0l-155,155c-4.7,4.7-4.7,12.3,0,17c2.3,2.3,5.4,3.5,8.5,3.5s6.1-1.2,8.5-3.5
                                                    l146.5-146.6l13.7,13.7l-235.2,235.3c-2.3,2.3-3.5,5.3-3.5,8.5s1.3,6.2,3.5,8.5l7.6,7.6l-33.5,33.4c-2.3,2.3-3.5,5.3-3.5,8.5
                                                    s1.3,6.2,3.5,8.5l14.9,14.9l-28.6,28.6c-4.7,4.7-4.7,12.3,0,17c2.3,2.3,5.4,3.5,8.5,3.5s6.1-1.2,8.5-3.5l28.6-28.6l14.9,14.9
                                                    c2.3,2.3,5.3,3.5,8.5,3.5s6.2-1.3,8.5-3.5l33.5-33.5l7.6,7.6c2.3,2.3,5.4,3.5,8.5,3.5s6.1-1.2,8.5-3.5l270.4-270.4
                                                    c0.3-0.3,0.6-0.6,0.8-0.9c0.3-0.3,0.6-0.5,0.9-0.8C460.212,89.3,460.212,46.3,433.812,19.9z M95.013,388.4l-29.8-29.8l25-25
                                                    l14.9,14.9l14.9,14.9L95.013,388.4z M153.113,362.5l-7.6-7.6l0,0l-23.4-23.4l-31-31l226.8-226.7l62,62L153.113,362.5z"/>
                                                <path d="M420.112,452.2h-385.5c-6.6,0-12,5.4-12,12s5.4,12,12,12h385.5c6.6,0,12-5.4,12-12S426.712,452.2,420.112,452.2z"/>
                                            </g>
                                        </g>
                                        </svg>
                                        </button>
                                    </div>
                                    <div className={`option__students--delete`}>
                                        <button>
                                            <svg width="20px" height="20px" fill="#fff" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M905.92 237.76a32 32 0 0 0-52.48 36.48A416 416 0 1 1 96 512a418.56 418.56 0 0 1 297.28-398.72 32 32 0 1 0-18.24-61.44A480 480 0 1 0 992 512a477.12 477.12 0 0 0-86.08-274.24z" /><path d="M630.72 113.28A413.76 413.76 0 0 1 768 185.28a32 32 0 0 0 39.68-50.24 476.8 476.8 0 0 0-160-83.2 32 32 0 0 0-18.24 61.44zM489.28 86.72a36.8 36.8 0 0 0 10.56 6.72 30.08 30.08 0 0 0 24.32 0 37.12 37.12 0 0 0 10.56-6.72A32 32 0 0 0 544 64a33.6 33.6 0 0 0-9.28-22.72A32 32 0 0 0 505.6 32a20.8 20.8 0 0 0-5.76 1.92 23.68 23.68 0 0 0-5.76 2.88l-4.8 3.84a32 32 0 0 0-6.72 10.56A32 32 0 0 0 480 64a32 32 0 0 0 2.56 12.16 37.12 37.12 0 0 0 6.72 10.56zM726.72 297.28a32 32 0 0 0-45.12 0l-169.6 169.6-169.28-169.6A32 32 0 0 0 297.6 342.4l169.28 169.6-169.6 169.28a32 32 0 1 0 45.12 45.12l169.6-169.28 169.28 169.28a32 32 0 0 0 45.12-45.12L557.12 512l169.28-169.28a32 32 0 0 0 0.32-45.44z" /></svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    </div>

                </div>
            </div>
        </>
    )
}