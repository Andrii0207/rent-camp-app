import { createSlice } from "@reduxjs/toolkit";
import { getAdvertiseList, getAll } from "./operations";
import { checkResponse } from "./checkResponce";

const advertsSlice = createSlice({
    name: "adverts",
    initialState: { entity: [], isLoading: false, error: null, all: [] },

    extraReducers: builder => {
        builder
            .addCase(getAdvertiseList.pending, (state, _) => {
                state.isLoading = true;
            })
            .addCase(getAdvertiseList.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.entity = checkResponse(state.entity, payload, "_id") ? state.entity : [...state.entity, ...payload];
                state.error = null;
            }).addCase(getAdvertiseList.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            }).addCase(getAll.pending, (state, _) => {
                state.isLoading = true;
            })
            .addCase(getAll.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.all = payload;
                state.error = null;
            }).addCase(getAll.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
    }
})

export const advertsReducer = advertsSlice.reducer;