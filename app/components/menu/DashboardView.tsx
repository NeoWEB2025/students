import LeftMenu from "./LeftMenu";

export default function DashboardView() {
    return (
        <>
            <div className={`container flex`}>
                <LeftMenu></LeftMenu>

                <main className={`main`}>

                </main>
            
            
                <div className={`right-sidebar`}>

                </div>
            </div>
        </>
    )
}