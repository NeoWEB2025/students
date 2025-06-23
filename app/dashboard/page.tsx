import Header from "@/app/components/Header";
import LeftMenu from "@/app/components/menu/LeftMenu";
import ChartAreaInteractive from "@/app/components/charts/ChartAreaInteractive";
import ChartAreaLinear from "@/app/components/charts/ChartAreaLinear";
import {ChartPie} from "lucide-react";
import ChartPieInteractive from "@/app/components/charts/ChartPie";
import ChartLineLinear from "../components/charts/ChartLineLinear";
import TasksView from "@/app/components/TasksView";
import AppSidebar from "@/app/components/menu/LeftMenuChild";
import SiteHeader from "@/app/components/menu/SiteHeader";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import {Card} from "@/components/ui/card";

export default function DashboardPage() {
    return (
        <div className={`bg-[#171717]`}>
            <SidebarProvider>
                <AppSidebar></AppSidebar>
                <SidebarInset className={`p-5`}>
                    <SiteHeader></SiteHeader>
                    <div className={`bg-[#0A0A0A] rounded-b-3xl`}>
                        <div className={`grid grid-cols-3 grid-rows-2 gap-10 m-10`}>
                            <div className={`col-span-2`}>
                                <ChartAreaLinear></ChartAreaLinear>
                            </div>
                            <div className={`col-start-1 row-end-2`}>
                                <ChartPieInteractive></ChartPieInteractive>
                            </div>
                            <div className={`col-start-2 row-end-2`}>
                                <ChartLineLinear></ChartLineLinear>
                            </div>
                            <div className={`col-start-3 row-end-2 row-span-2`}>
                                <TasksView></TasksView>
                            </div>
                        </div>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </div>
    );
}