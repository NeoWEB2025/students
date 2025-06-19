"use client"

import React, { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@radix-ui/react-select";
import { TasksDal } from "@/app/dal/tasks-dal";

interface Task {
    _id: string;
    title: string;
    description: string;
    status: 'pending' | 'in_progress' | 'completed';
}

export default function TasksView() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const data = await TasksDal.getTasks();
                setTasks(data);
            } catch (err: any) {
                setError(err.message || 'Failed to fetch tasks');
                console.error('Error fetching tasks:', err);
            }
        };

        fetchTasks();
    }, []);

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    return (
        <ScrollArea className="bg-[#171717] border-[#232323] rounded-md border h-[35vh]">
            <div className="p-4 px-8">
                <h4 className="mb-4 text-lg leading-none font-medium">Tasks</h4>
                {tasks.map((task) => (
                    <React.Fragment key={task._id}>
                        <div className="text-sm">
                            <h5 className="font-medium">{task.title} <span className={`inline-block px-2 py-1 rounded text-xs ${
                                task.status === 'completed' ? 'bg-green-500' :
                                    task.status === 'in_progress' ? 'bg-yellow-500' : 'bg-gray-500'
                            }`}>
                                {task.status}
                            </span></h5>
                        </div>
                        <Separator className="my-2" />
                    </React.Fragment>
                ))}
            </div>
        </ScrollArea>
    );
}