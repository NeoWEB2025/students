import Student from "@/app/db/schemas/student";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/db/connection";

export async function GET(request: NextRequest) {
    try {
        await connectDB();
        const students = await Student.find({});
        return NextResponse.json(students);
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching students' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        await connectDB();
        console.log(request);
        const body = await request.json();
        console.log(body);
        const student = await Student.create(body);
        return NextResponse.json(student, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Error creating student: ' + error }, { status: 500 });
    }
}