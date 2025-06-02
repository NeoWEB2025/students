
import React from "react";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Separator} from "@radix-ui/react-select";
import {TasksDal} from "@/app/dal/tasks-dal";

const rawTasks = await TasksDal.getTasks();


export default function TasksView() {
    console.log(rawTasks);
    return (
        <ScrollArea className="bg-[#171717] border-[#232323] rounded-md border h-[35vh]">
            <div className="p-4 px-8">
                <h4 className="mb-4 text-lg leading-none font-medium">Information</h4>
                {/*{tags.map((tag) => (*/}
                {/*    <React.Fragment key={tag}>*/}
                {/*        <div className="text-sm">{tag}</div>*/}
                {/*        <Separator className="my-2" />*/}
                {/*    </React.Fragment>*/}
                {/*))}*/}
            </div>
        </ScrollArea>
    )
}