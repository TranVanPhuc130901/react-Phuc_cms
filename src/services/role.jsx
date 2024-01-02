import axios from 'axios';
const roleService = {
    getAllGroupsAndRoles: async () => {
      try {
        const response = await axios.get('http://localhost:8989/api/get-group-and-role', {
        });
  
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error; // Re-throw the error to handle it in the component
      }
    },

  
    addGroupAndRole: async (productData) => {
        // Gọi API thêm sản phẩm
    },
    editGroupAndRole: async (productId, productData) => {
        // Gọi API sửa sản phẩm
    },
    deleteGroupAndRole: async (productId) => {
        // Gọi API xóa sản phẩm
    }
};

export default roleService;