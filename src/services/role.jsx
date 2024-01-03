import axios from 'axios';
const roleService = {
    getAllGroupsAndRoles: async () => {
      try {
        const response = await axios.get('http://localhost:8989/api/get-permission', {
        });
  
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error; // Re-throw the error to handle it in the component
      }
    },
    getAllRoles: async () => {
      try {
        const response = await axios.get('http://localhost:8989/api/get-role', {
        });
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error; // Re-throw the error to handle it in the component
      }
    },
    getAllRoleToPermission: async (id) => {
      try {
        console.log(`http://localhost:8989/api/get-role-to-permisson/${id}`)
        const response = await axios.get(`http://localhost:8989/api/get-role-to-permisson/${id}`, {
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
    editGroupAndRole: async (data) => {
      const url = "http://localhost:8989/api/update-role";
      const id = data.id;
      const param = data.param; 
      console.log(id, param);
      try {
        const response = await axios.patch(url, {
          id: id,
          param: param,
          // Các thông tin khác cần thiết để sửa quyền
        });
    
        // Nếu response.status không là 2xx (ví dụ: 200, 201), đánh giá là lỗi
        if (response.status < 200 || response.status >= 300) {
          console.error('Error editing group and role:', response.statusText);
          throw new Error('Failed to edit group and role');
        }
    
        // Xử lý kết quả từ API nếu cần
        const result = response.data;
    
        return result; // Hoặc có thể trả về một thông báo thành công
      } catch (error) {
        console.error('Error editing group and role:', error.message);
        throw error; // Nếu muốn xử lý lỗi ở mức cao hơn
      }
    },

    deleteGroupAndRole: async (productId) => {
        // Gọi API xóa sản phẩm
    }
};

export default roleService;