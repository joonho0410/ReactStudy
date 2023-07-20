import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { postCheckId, postCheckNick } from "../api/api";

export const asyncCheckId = createAsyncThunk(
    "signIn/asyncCheckId",
    async (id: string) => {
        const response = await postCheckId(id);
        return response.data;
    }
);

export const asyncCheckNick = createAsyncThunk(
    "signIn/asyncCheckNick",
    async (nick: string) => {
        const response = await postCheckNick(nick);
        return response.data;
    }
)

const signInSlice = createSlice({
    name: "signIn",
    initialState: {
        loadingId: false,
        errorId: null,
        dataId: null,
        loadingNick: false,
        errorNick: null,
        dataNick: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(asyncCheckId.pending, (state) => {
            state.loadingId = true;
            state.errorId = null;
        }),
        builder.addCase(asyncCheckId.fulfilled, (state, action) => {
            state.loadingId = false;
            state.dataId = action.payload;
        }),
        builder.addCase(asyncCheckId.rejected, (state, action) => {
            state.loadingId = false;
        });
        
        builder.addCase(asyncCheckNick.pending, (state) => {
            state.loadingNick = true;
            state.errorNick = null;
        }),
        builder.addCase(asyncCheckNick.fulfilled, (state, action) => {
            state.loadingNick = false;
            state.dataNick = action.payload;
        }),
        builder.addCase(asyncCheckNick.rejected, (state, action) => {
            state.loadingNick = false;
        });
    },
});

export default signInSlice.reducer;