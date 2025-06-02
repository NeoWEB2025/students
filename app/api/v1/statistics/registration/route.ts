import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/db/connection";
import Student from "@/app/db/schemas/student";
import User from "@/app/db/schemas/user";
import mongoose from "mongoose";

interface IUser {
    _id: mongoose.Types.ObjectId;
    createdAt: Date;
}

// Ensure User model is registered
if (!mongoose.models.User) {
    mongoose.model('User', User.schema);
}

export async function GET(request: NextRequest) {
    try {
        await connectDB();
        
        // Get all students
        const students = await Student.find({}).lean();
        
        // Get all users
        const users = (await User.find({}).lean()) as unknown as IUser[];
        
        // Create a map of user IDs to creation dates
        const userCreationDates = new Map(
            users.map(user => [user._id.toString(), user.createdAt])
        );

        if (!students || !Array.isArray(students)) {
            return NextResponse.json([], { status: 200 });
        }

        const registrationsByDate = students.reduce((acc: any, student: any) => {
            const userId = student.user?.toString();
            const createdAt = userCreationDates.get(userId);
            
            if (!createdAt) return acc;
            
            const date = new Date(createdAt).toISOString().split('T')[0];
            const gender = student.gender || 'unknown';
            
            if (!acc[date]) {
                acc[date] = { date, male: 0, female: 0 };
            }
            
            if (gender === 'male') {
                acc[date].male++;
            } else if (gender === 'female') {
                acc[date].female++;
            }
            
            return acc;
        }, {});

        const chartData = Object.values(registrationsByDate)
            .sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());

        return NextResponse.json(chartData || []);
    } catch (error) {
        console.error('Error in registration statistics:', error);
        return NextResponse.json([], { status: 200 });
    }
} 