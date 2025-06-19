import { NextRequest, NextResponse } from "next/server";

import User from "@/app/db/schemas/user";
import bcrypt from 'bcrypt';
import connectDB from "@/app/db/connection";
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined in environment variables');
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    try {
        await connectDB();
        const { email, password } = body;
        const user = await User.findOne({ email });
        if (!user) {
            console.log('User not found');
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
        }
        const token = jwt.sign({ userId: user._id }, JWT_SECRET!, { expiresIn: '1h' });
        return NextResponse.json({ token, user });
    } catch (error) {
        return NextResponse.json({ error: 'Error logging in: ' + error }, { status: 500 });
    }
}