import axios from 'axios';

const productService = {
    getAllProducts: async() => {
        try {
            const response = await axios.get('http://localhost:8989/api/get-items');
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default productService;