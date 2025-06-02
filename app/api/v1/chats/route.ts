import { NextRequest, NextResponse } from "next/server";
import Chat from "@/app/db/schemas/chat";
import connectDB from "@/app/db/connection";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const chats = await Chat.find({ participants: { $in: [params.id] } });
        return NextResponse.json(chats);
    } catch (error) {
        return NextResponse.json({ error: "Failed to get chats" }, { status: 500 });
    }
}  

export async function POST(request: NextRequest) {
    try {
        await connectDB();
        const { userId1, userId2 } = await request.json();

        if (!userId1 || !userId2 || userId1 === userId2) {
            return NextResponse.json({ error: "Invalid user IDs" }, { status: 400 });
        }
        
        const existingChat = await Chat.findOne({
            participants: { $all: [userId1, userId2], $size: 2 }
          });

        if (existingChat) {
            return NextResponse.json({ chat: existingChat });
        }

        const newChat = await Chat.create({ participants: [userId1, userId2] });
        return NextResponse.json(newChat);
    } catch (error) {
        return NextResponse.json({ error: "Failed to create chat" }, { status: 500 });
    }
}