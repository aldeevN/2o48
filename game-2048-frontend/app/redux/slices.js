import { createSlice } from "@reduxjs/toolkit";


const initialState = { isAuthenticated: false };

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthStatus(state, action) {
            state.isAuthenticated = action.payload.isAuthenticated;
        },
        setLogout(state) {
            state.isAuthenticated = false;
        },
    },
});
export default authSlice;