import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import loginReducer from './Login';
import signInReducer from './signin'
export const store = configureStore({
    reducer: {
        login: loginReducer,
        signIn: signInReducer, 
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch