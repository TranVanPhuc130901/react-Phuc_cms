import axios from 'axios';



const refreshToken = async () => {
  // Thực hiện gọi API refreshToken ở đây và trả về token mới
  // Ví dụ:
  const response = await axios.post('http://localhost:3000/api/auth/refreshToken', {
    rsToken: localStorage.getItem('authRsToken'), // Thay đổi thông tin cụ thể theo API của bạn
  });
  return response.data.token; // Giả sử API refreshToken trả về accessToken mới
};

const productService = {
  getAllProducts: async (id, pageSize, pageNumber) => {
    const params = { id, pageSize, pageNumber };
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.get('http://localhost:3000/api/role/', {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
        params,
      });
  
      console.log(response.data); // Log data instead of codeErr
      
      return response.data;
    } catch (error) {
      const dataErr = error.response.data.codeErr;
      console.error('Error fetching data:', error.message);
      
      if (error.response.status === 401 && dataErr === 9) {
        try {
          // Gọi API refreshToken và cập nhật lại authToken
          const newToken = await refreshToken();
          localStorage.setItem('authToken', newToken);
  
          // Tiếp tục gọi lại API getRole với token mới
          const updatedResponse = await axios.get('http://localhost:3000/api/role/', {
            headers: {
              authorization: `Bearer ${newToken}`,
            },
            params,
          });
  
          console.log(updatedResponse.data);
          return updatedResponse.data;
        } catch (refreshError) {
          console.error('Error refreshing token:', refreshError.message);
          throw refreshError; // Re-throw the error to handle it in the component
        }
      }
  
      throw error; // Re-throw the error to handle it in the component
    }
  },
  
    insertProduct: async(data) => {
      try {
          const response = await axios.post('http://localhost:3000/api/post/addPost', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('authToken')}`,
            },
            data
          });
          return response.data;
      } catch (error) {
          throw error;
      }
    },
    editProduct: async (productId, productData) => {
      try {
        const response = await axios.put(`http://localhost:8989/api/edit-item/${productId}`, productData);
        return response.data;
    } catch (error) {
        throw error;
    }
    },
    deleteProduct: async (productId) => {
      try {
        const response = await axios.delete(`http://localhost:8989/api/delete-item/${productId}`);
        return response.data;
      } catch (error) {
        throw error;
      }
        // Gọi API xóa sản phẩm
    }
};

export default productService;