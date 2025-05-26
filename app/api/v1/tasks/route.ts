import Task from "@/app/db/schemas/task";
import connectDB from "@/app/db/connection";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        await connectDB();
        const tasks = await Task.find({});
        return NextResponse.json(tasks);
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching tasks' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        await connectDB();
        const body = await request.json();
        const task = await Task.create(body);
        return NextResponse.json(task, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Error creating task' }, { status: 500 });
    }
}