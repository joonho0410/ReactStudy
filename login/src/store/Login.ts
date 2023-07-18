import { 
    createSlice,
    createAsyncThunk,
    PayloadAction,
    createSelector
 } from "@reduxjs/toolkit";

import { getLogin } from "../api/api";

interface LoginState {
    loginState: boolean
    loading: boolean
}

const initialState = { loginState: false, loading: false } as LoginState

export const login = createAsyncThunk(
    "Login/login",
    async () => {
        const response = await getLogin('successToLogin');
        // const response = await getLogin('failToLogin');
        return response.data.loginState; 
    }
)

const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.pending, (state) =>{
            state.loading = true;
        })
        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.loginState = payload;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.loginState = false;
        });
    },
})

export default LoginSlice.reducer;