import { 
    createSlice,
    createAsyncThunk,
 } from "@reduxjs/toolkit";

import { getLogin, postMakeId } from "../api/api";

interface LoginState {
    authState: boolean
    loginState: boolean
    loadingLogin: boolean
    loadingMakeId: boolean
}

const initialState = { authState: false, loginState: false, loadingLogin: false, loadingMakeId: false } as LoginState

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
    reducers: {
        logined(state){
            state.authState = true;
            state.loginState = true;
        }
    },
    extraReducers: builder => {
        builder.addCase(login.pending, (state) =>{
            state.loadingLogin = true;
        })
        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.loadingLogin = false;
            state.authState = payload;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loadingLogin = false;
            state.authState = false;
        });

        builder.addCase(makeId.pending, (state) =>{
            state.loadingMakeId = true;
        })
        builder.addCase(makeId.fulfilled, (state, { payload }) => {
            state.loadingMakeId = false;
            state.loginState = payload;
            console.log(payload);
        });
        builder.addCase(makeId.rejected, (state, action) => {
            state.loadingMakeId = false;
            state.loginState = false;
        });
    },
})

export const { logined } = LoginSlice.actions;
export default LoginSlice.reducer;