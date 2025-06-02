import axios from "axios";

const UsersAPI = axios.create({
    baseURL: 'http://localhost:3000/api/v1/users',
    withCredentials: true
})

export const UsersDal = {
    async getUsers() {
        return await UsersAPI.get('/').then(res => res.data);
    }
}