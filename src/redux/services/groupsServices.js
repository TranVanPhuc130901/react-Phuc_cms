import axios from 'axios';

const groupService = {
    getAllGroups: async(app) => {
        try {
            const response = await axios.get('https://blog-back-end-2.onrender.com/api/role/' + app, {
                app: app
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default groupService;