import { NextRequest, NextResponse } from "next/server";
import Task from "@/app/db/schemas/task";
import connectDB from "@/app/db/connection";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        await connectDB();
        const { id } = params;
        const task = await Task.findById(id);
        if (!task) {
            return NextResponse.json({ error: 'Task not found' }, { status: 404 });
        }
        return NextResponse.json(task);
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching task' }, { status: 500 });
    }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const body = await request.json();
    const task = await Task.findByIdAndUpdate(id, body, { new: true });
    return NextResponse.json(task);
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ error: 'Invalid ID format' }, { status: 400 });
    }
    try {
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return NextResponse.json({ error: 'Task not found' }, { status: 404 });
        }
        return NextResponse.json({ message: 'Task deleted' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting task' }, { status: 500 });
    }
}