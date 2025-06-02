
import React from "react";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Separator} from "@radix-ui/react-select";
import {TasksDal} from "@/app/dal/tasks-dal";
import data from "@mongodb-js/saslprep/dist/code-points-data-browser";

const rawTasks = TasksDal.getTasks().then();

const tasks = Promise.resolve(rawTasks)


export default function TasksView() {
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