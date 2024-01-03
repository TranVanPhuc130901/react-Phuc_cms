import axios from 'axios';

const groupService = {
    getAllGroups: async(app) => {
        try {
            const response = await axios.get('http://localhost:8989/api/get-groups/' + app, {
                app: app
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default groupService;