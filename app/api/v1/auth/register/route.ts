import connectDB from "@/app/db/connection";
import User from "@/app/db/schemas/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export async function POST(request: NextRequest) {
    const body = await request.json();
    try {
        await connectDB();
        const { firstName, lastName, email, password } = body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: 'User already exists' }, { status: 400 });
        }
        const hashedPassword = await bcrypt.hash(password, 10); 
        const user = await User.create({ firstName, lastName, email, password: hashedPassword });
        return NextResponse.json(user, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Error creating user: ' + error }, { status: 500 });
    }
}