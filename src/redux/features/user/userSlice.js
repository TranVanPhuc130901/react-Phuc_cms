import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from '../../services/userServices';

// Action creator để gọi API và lưu dữ liệu vào Redux
export const fetchUsers = createAsyncThunk('user/fetchUsers', async() => {
    const response = await userService.getAllUser();
    return response.data;
});

export const createUser = createAsyncThunk('user/createUser', async(userData) => {
    const response = await userService.createUser(userData);
    return response.data;
});

export const editUser = createAsyncThunk('user/editUser', async({ userId, userData }) => {
    const response = await userService.editUser(userId, userData);
    return response.data;
});

export const deleteUser = createAsyncThunk('user/deleteUser', async(userId) => {
    await userService.deleteUser(userId);
    return userId;
});

// Slice cho sản phẩm
const userSlice = createSlice({
    name: 'user',
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
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // state.users.push(action.payload);
            })
            .addCase(editUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // state.users = state.users.map((user) =>
                //     user.id === action.payload.id ? action.payload : user
                // );
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // state.users = state.users.filter((user) => user.id !== action.payload);
            });
    },
});

export default userSlice.reducer;