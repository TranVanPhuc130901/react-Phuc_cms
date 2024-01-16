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