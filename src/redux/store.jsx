import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/products/productSlice';
import groupsReducer from '../features/groups/groupsSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    groups: groupsReducer,
  },
});

export default store;