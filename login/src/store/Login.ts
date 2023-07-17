import { configureStore, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
    loginState: boolean
}

const initialState = { loginState: false } as LoginState

const LoginSlice = createSlice({
    name: 'loginState',
    initialState,
    reducers: {
        successLogin(state) {
            state.loginState = true;
        }
    }
})

export const { successLogin } = LoginSlice.actions
export default LoginSlice.reducer;