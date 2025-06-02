import { NextRequest, NextResponse } from "next/server";
import Message from "@/app/db/schemas/message";
import connectDB from "@/app/db/connection";
import Chat from "@/app/db/schemas/chat";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        await connectDB();
        const messages = await Message.find({ chat: params.id });
        return NextResponse.json(messages);
    } catch (error) {
        return NextResponse.json({ error: "Failed to get messages" }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        await connectDB();
        const { chat, sender, content } = await request.json();

        if (!chat || !sender || !content) {
            return NextResponse.json({ error: "Invalid message data" }, { status: 400 });
        }

        const foundChat = await Chat.findById(chat);
        if (!foundChat || !foundChat.participants.includes(sender)) {
            return NextResponse.json({ error: "Invalid chat or access denied" }, { status: 403 });
        }

        const message = await Message.create({ chat, sender, content });
        await message.save();
        return NextResponse.json(message);
    } catch (error) {
        return NextResponse.json({ error: "Failed to create message" }, { status: 500 });
    }
}

