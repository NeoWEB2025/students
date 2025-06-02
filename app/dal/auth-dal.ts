import axios from "axios";

const AuthAPI = axios.create({
    baseURL: 'http://localhost:8080/api/v1/auth',
    withCredentials: true
})

export const AuthDal = {
    async login(email: string, password: string) {
        return await AuthAPI.post('/login', { email, password });
    },
    
    async register(firstName: string, lastName: string, email: string, password: string) {
        return await AuthAPI.post('/register', {firstName, lastName, email, password});
    }
}