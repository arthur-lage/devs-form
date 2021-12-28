import axios from 'axios'

const url = "https://runners-form-server-al.vercel.app/api/users"

const api = {
    async getAll() {
        return await axios.get(`${url}/get`)
    },
    async getById(id) {
        return await axios.get(`${url}/get-by-id` + id)
    },
    async create(data) {
        return await axios.post(`${url}/register`, data)
    }
}

export default api