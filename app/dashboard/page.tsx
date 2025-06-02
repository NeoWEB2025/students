import Header from "@/app/components/Header";
import LeftMenu from "@/app/components/menu/LeftMenu";
import ChartAreaInteractive from "@/app/components/charts/ChartAreaInteractive";
import ChartAreaLinear from "@/app/components/charts/ChartAreaLinear";
import {ChartPie} from "lucide-react";
import ChartPieInteractive from "@/app/components/charts/ChartPie";
import ChartLineLinear from "../components/charts/ChartLineLinear";
import TasksView from "@/app/components/TasksView";

export default function DashboardPage() {
    return (
        <>
            <Header></Header>
            <div className={`grid grid-cols-3 grid-rows-2`}>
                <div className={`col-end-1 row-end-1 h-[50vh]`}>
                    <LeftMenu></LeftMenu>
                </div>
                <div className={`col-span-2 h-[50vh] ml-20`}>
                    <ChartAreaLinear></ChartAreaLinear>
                </div>
                <div className={`col-start-1 row-end-2 ml-20`}>
                    <ChartPieInteractive></ChartPieInteractive>
                </div>
                <div className={`col-start-2 row-end-2 ml-20`}>
                    <ChartLineLinear></ChartLineLinear>
                </div>
                <div className={`col-start-3 row-end-1 ml-20 mr-10`}>
                    <TasksView></TasksView>
                </div>
            </div>
        </>
    );
}