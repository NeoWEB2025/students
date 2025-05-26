import Student from "@/app/db/schemas/student";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const id = params.id;
    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ error: 'Invalid ID format' }, { status: 400 });
    }

    try {
        const student = await Student.findById(id);
        if (!student) {
            return NextResponse.json({ error: 'Student not found' }, { status: 404 });
        }
        return NextResponse.json(student);
    } catch (error) {
        return NextResponse.json({ error: 'Error finding student' }, { status: 500 });
    }
}


export async function PUT(request: NextRequest) {
    const body = await request.json();
    if (!body._id) {
        return NextResponse.json({ error: 'ID is required in request body' }, { status: 400 });
    }
    
    if (!mongoose.Types.ObjectId.isValid(body._id)) {
        return NextResponse.json({ error: 'Invalid ID format' }, { status: 400 });
    }

    try {
        const student = await Student.findByIdAndUpdate(body._id, body, { new: true });
        if (!student) {
            return NextResponse.json({ error: 'Student not found' }, { status: 404 });
        }
        return NextResponse.json(student);
    } catch (error) {
        return NextResponse.json({ error: 'Error updating student' }, { status: 500 });
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const id = params.id;
    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ error: 'Invalid ID format' }, { status: 400 });
    }

    try {
        const student = await Student.findById(id);
        if (!student) {
            return NextResponse.json({ error: 'Student not found' }, { status: 404 });
        }
        await student.deleteOne();
        return NextResponse.json({ message: 'Student deleted' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting student' }, { status: 500 });
    }
}