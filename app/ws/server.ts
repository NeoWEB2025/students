import WebSocket from "ws";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { ChatsDal } from "../dal/chats-dal";
import { MessagesDal } from "../dal/messages-dal";

mongoose.connect('mongodb://localhost:27017/students')
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

const JWT_SECRET = process.env.JWT_SECRET;

const wss = new WebSocket.Server({ port: 3001 });
const clients = new Map<string, WebSocket>();

const getUserId = async (token: string) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET!) as { id: string };
    return decoded.id;
  } catch (err) {
    return null;
  }
}

wss.on("connection", async (ws, req) => {
  const url = new URL(req.url || "", "http://localhost");
  const cookies = new Map(
    url.searchParams.get('cookies')?.split(';').map(cookie => {
      const [key, value] = cookie.trim().split('=');
      return [key, value];
    }) || []
  );
  
  const token = cookies.get('token');
  if (!token) {
    ws.close();
    return;
  }

  const userId = await getUserId(token);
  if (!userId) {
    ws.close();
    return;
  }

  clients.set(userId, ws);
  console.log(`User connected: ${userId}`);

  ws.on("message", async (rawMessage) => {
    try {
      const { chatId, content } = JSON.parse(rawMessage.toString());

      const chat = await ChatsDal.getChat(chatId);
      if (!chat || !chat.participants.includes(userId)) {
        return ws.send(JSON.stringify({ error: "Chat not found or access denied" }));
      }

      const message = await MessagesDal.sendMessage({
        chat: chatId,
        sender: userId,
        content,
      });

      const response = JSON.stringify({
        type: "message",
        chatId,
        senderId: userId,
        content,
        createdAt: message.createdAt,
      });

      for (const participantId of chat.participants) {
        const clientWs = clients.get(participantId.toString());
        if (clientWs && clientWs.readyState === WebSocket.OPEN) {
          clientWs.send(response);
        }
      }

    } catch (err) {
      console.error("Message error:", err);
      ws.send(JSON.stringify({ error: "Invalid message format" }));
    }
  });

  ws.on("close", () => {
    clients.delete(userId);
    console.log(`User disconnected: ${userId}`);
  });
});

console.log("WebSocket server running on ws://localhost:3001");
