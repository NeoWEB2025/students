import LeftMenu from "./LeftMenu";
import ChartAreaInteractive from "@/app/components/charts/ChartAreaInteractive";

export default function DashboardView() {
    return (
        <>
            <div className={`container flex`}>
                <ChartAreaInteractive></ChartAreaInteractive>
            </div>
        </>
    )
}