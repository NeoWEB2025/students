import axios from "axios";

const MessagesAPI = axios.create({
    baseURL: 'http://localhost:3000/api/v1/messages',
    withCredentials: true
})

export const MessagesDal = {
    async sendMessage({chat, sender, content}: {chat: string, sender: string, content: string}) {
        return await MessagesAPI.post('/', {chat, sender, content}).then(res => res.data);
    },

    async getMessages(chatId: string) {
        return await MessagesAPI.get(`/${chatId}`).then(res => res.data);
    }
}