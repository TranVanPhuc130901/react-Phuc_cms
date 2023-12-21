// import redux
import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false, // trạng thái đăng nhập
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true
            }
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                isAuthenticated: false
            }
        default:
            return state
    }
}

const store = configureStore({
    reducer: rootReducer,
});

export default store;