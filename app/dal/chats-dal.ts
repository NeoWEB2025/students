import axios from "axios";

const ChatsAPI = axios.create({
    baseURL: 'http://localhost:3000/api/v1/chats',
    withCredentials: true
})

export const ChatsDal = {
    async getChats(userId: string) {
        return await ChatsAPI.get(`/${userId}`).then(res => res.data);
    },

    async getChat(chatId: string) {
        return await ChatsAPI.get(`/${chatId}`).then(res => res.data);
    },

    async createChat(userId1: string, userId2: string) {
        return await ChatsAPI.post('/', { userId1, userId2 }).then(res => res.data);
    }
}   