import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import groupsService from '../../services/groupsServices';

// Action creator để gọi API và lưu dữ liệu vào Redux
export const fetchProducts = createAsyncThunk('groups/fetchGroups', async() => {
    const response = await groupsService.getAllGroups();
    return response.data;

});

// Slice cho sản phẩm
const groupSlice = createSlice({
    name: 'groups',
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

export default groupSlice.reducer;