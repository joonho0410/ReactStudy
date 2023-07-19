import { 
    createSlice,
    createAsyncThunk,
    PayloadAction,
    createSelector
 } from "@reduxjs/toolkit";

import { getLogin, postMakeId } from "../api/api";

interface LoginState {
    authState: boolean
    loginState: boolean
    loading: boolean
}

const initialState = { authState: false, loginState: false, loading: false } as LoginState

export const login = createAsyncThunk(
    "Login/login",
    async () => {
        const response = await getLogin('successToLogin');
        // const response = await getLogin('failToLogin');
        return response.data.authState; 
    }
)

export const makeId = createAsyncThunk(
    "Login/makeId",
    async () => {
        const response = await postMakeId('successToMakeId');
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
            state.authState = payload;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.authState = false;
        });

        builder.addCase(makeId.pending, (state) =>{
            state.loading = true;
        })
        builder.addCase(makeId.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.loginState = payload;
            console.log(payload);
        });
        builder.addCase(makeId.rejected, (state, action) => {
            state.loading = false;
            state.loginState = false;
        });
    },
})

export default LoginSlice.reducer;