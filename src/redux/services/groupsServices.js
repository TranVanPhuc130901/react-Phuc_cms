import axios from 'axios';

const groupService = {
    getAllProducts: async() => {
        try {
            const response = await axios.get('http://localhost:8989/api/get-groups');
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default groupService;