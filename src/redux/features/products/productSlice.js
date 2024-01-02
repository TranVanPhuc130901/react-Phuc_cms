import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productService from '../../services/productServices';

// Action creator để gọi API và lưu dữ liệu vào Redux
export const fetchProducts = createAsyncThunk('product/fetchProducts', async() => {
    const response = await productService.getAllProducts();
    return response.data;
});

// Slice cho sản phẩm
const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        status: 'idle', // Hoặc 'loading', 'succeeded', 'failed' tùy thuộc vào trạng thái API call
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default productSlice.reducer;