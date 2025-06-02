import axios from "axios";

const StudentsAPI = axios.create({
    baseURL: 'http://localhost:3000/api/v1/students',
    withCredentials: true
})

export const StudentsDal = {
    async getStudents() {
        return await StudentsAPI.get('/').then(res => res.data);
    },

    async createStudent({group, user, birthday, gender, status}: {group: string, user: string, birthday: string, gender: string, status: string}) {
        return await StudentsAPI.post('/', {group, user, birthday, gender, status}).then(res => res.data);
    },

    async updateStudent({id, group, user, birthday, gender, status}: {id: string, group: string, user: string, birthday: string, gender: string, status: string}) {
        return await StudentsAPI.put(`/${id}`, {group, user, birthday, gender, status}).then(res => res.data);
    },

    async deleteStudent(id: string) {
        return await StudentsAPI.delete(`/${id}`).then(res => res.data);
    }
}