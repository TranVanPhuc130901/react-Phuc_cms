// groupsDuck.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import groupsService from '../services/groupsServices';

// Action creator để gọi API và lưu dữ liệu vào Redux
export const fetchGroups = createAsyncThunk('groups/fetchGroups', async(app) => {
    try {
        const response = await groupsService.getAllGroups(app);
        return response.groups;
    } catch (error) {
        throw error;
    }
});

// Slice cho groups
const groupsSlice = createSlice({
    name: 'groups',
    initialState: {
        groups: [],
        status: 'succeeded', // Hoặc 'loading', 'succeeded', 'failed' tùy thuộc vào trạng thái API call
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGroups.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchGroups.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.groups = action.payload;
            })
            .addCase(fetchGroups.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

// Named exports cho reducer và actions nếu cần
export const { /* some other actions if needed */ } = groupsSlice.actions;
export const groupsReducer = groupsSlice.reducer;