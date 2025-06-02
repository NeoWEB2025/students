import axios from "axios";

const TasksAPI = axios.create({
    baseURL: 'http://localhost:3000/api/v1/tasks',
    withCredentials: true
})

export const TasksDal = {
    async getTasks() {
        return await TasksAPI.get('/').then(res => res.data);
    },

    async createTask({title, description, student, status}: {title: string, description: string, student: string, status: string}) {
        return await TasksAPI.post('/', {title, description, student, status}).then(res => res.data);
    },

    async updateTask({id, title, description, student, status}: {id: string, title: string, description: string, student: string, status: string}) {
        return await TasksAPI.put(`/${id}`, {title, description, student, status}).then(res => res.data);
    },

    async deleteTask(id: string) {
        return await TasksAPI.delete(`/${id}`).then(res => res.data);
    }
}