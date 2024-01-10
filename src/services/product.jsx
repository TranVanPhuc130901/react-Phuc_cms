import axios from 'axios';
const productService = {
    getAllProducts: async (id, pageSize, pageNumber) => {
      try {
        const params = { id, pageSize, pageNumber };
        const response = await axios.get('http://localhost:8989/api/get-items', {
          params,
        });
  
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error; // Re-throw the error to handle it in the component
      }
    },
  
    insertProduct: async(data) => {
      try {
          const response = await axios.post('http://localhost:8989/api/create-item', data);
          return response.data;
      } catch (error) {
          throw error;
      }
    },
    editProduct: async (productId, productData) => {
        // Gọi API sửa sản phẩm
    },
    deleteProduct: async (productId) => {
        // Gọi API xóa sản phẩm
    }
};

export default productService;