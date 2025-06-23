'use client'
import {
    Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuBadge, SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider
} from "@/components/ui/sidebar";

import {IconCirclePlusFilled, IconMail, type Icon, IconFolder, Icon24Hours, IconUser, IconInnerShadowTop} from "@tabler/icons-react"
import NavUser from "@/app/components/menu/NavUser";
import {useRouter} from "next/navigation";

export default function AppSidebar() {
    const router = useRouter()
    return (
            <Sidebar collapsible={`offcanvas`} className={`border-[#171717]`}>
                <SidebarHeader className={`text-white`}>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild
                                               className="data-[slot=sidebar-menu-button]:!p-1.5 mt-4 hover:text-white hover:bg-[#202020]">
                                <a href="#">
                                    <IconInnerShadowTop className="!size-5" />
                                    <span className="text-[16px]">Students Inc</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupContent className={`flex flex-col gap-2`}>
                            <SidebarMenu>
                                <SidebarMenuItem className={`flex items-center gap-2`}>
                                    <SidebarMenuButton asChild className={`hover:text-white hover:bg-[#202020]`} onClick={() => {router.push('/dashboard')}}>
                                        <a href="#">
                                            <IconFolder className="!size-5" />
                                            <span className={`text-sm`}>Dashboard</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem className={`flex items-center gap-2`}>
                                    <SidebarMenuButton asChild className={`hover:text-white hover:bg-[#202020]`} onClick={() => {router.push('/tasks')}}>
                                        <a href="#">
                                            <Icon24Hours className="!size-5" />
                                            <span className={`text-sm`}>Tasks</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem className={`flex items-center gap-2`}>
                                    <SidebarMenuButton asChild className={`hover:text-white hover:bg-[#202020]`} onClick={() => {router.push('/students')}}>
                                        <a href="#">
                                            <IconUser className="!size-5" />
                                            <span className={`text-sm`}>Students</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>
                    <NavUser user={{
                    name: "",
                    email: "",
                    avatar: ""
                }} />
                </SidebarFooter>
            </Sidebar>
    );
}