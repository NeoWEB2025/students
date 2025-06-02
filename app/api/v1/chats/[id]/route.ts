import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/db/connection";
import { ChatsDal } from "@/app/dal/chats-dal";
import Chat from "@/app/db/schemas/chat";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        await connectDB();
        const { id } = await params
        if (!id) {
            return NextResponse.json({ error: 'ID is required' }, { status: 400 });
        }

        const chat = await Chat.findById(id);
        if (!chat) {
            return NextResponse.json({ error: 'Chat not found' }, { status: 404 });
        }

        return NextResponse.json(chat);
    } catch (error) {
        return NextResponse.json({ error: "Failed to get chat" }, { status: 500 });
    }
}