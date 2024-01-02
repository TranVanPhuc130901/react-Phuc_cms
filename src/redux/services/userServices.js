import axios from 'axios';

const userService = {
    getAllUsers: async() => {
        try {
            const response = await axios.get('http://localhost:8989/api/get-user');
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    createUser: async(userData) => {
        try {
            const response = await axios.post('http://localhost:8989/api/create-user', userData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    editUser: async(userId, userData) => {
        try {
            const response = await axios.put(`http://localhost:8989/api/edit-user/${userId}`, userData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    deleteUser: async(userId) => {
        try {
            await axios.delete(`http://localhost:8989/api/delete-user/${userId}`);
        } catch (error) {
            throw error;
        }
    },
};

export default userService;