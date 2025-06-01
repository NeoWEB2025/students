// import "@/app/components/LeftMenu.module.scss"
import "@/public/style/style.css"

export default function LeftMenu() {
    return (
        <>
            <div className={`left-sidebar`}>
                <ul className={`left-sidebar__list flex`}>
                    <li><a className={`left-sidebar__list--item active`} href="#">Dashboard</a></li>
                    <li><a className={`left-sidebar__list--item`} href="#">Students</a></li>                        <li><a className={`left-sidebar__list--item`} href="#">Tasks</a></li>
                </ul>
            </div>
        </>
    )
}