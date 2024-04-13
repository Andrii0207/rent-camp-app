import { createSlice } from "@reduxjs/toolkit";
import { getAdvertiseList } from "./operations";

const advertsSlice = createSlice({
    name: "adverts",
    initialState: { entity: [], isLoading: false, error: null },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAdvertiseList.pending, (state, _) => {
                state.isLoading = true;
            })
            .addCase(getAdvertiseList.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.entity = payload;
                state.error = null;
            }).addCase(getAdvertiseList.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
    }
})


export const advertsReducer = advertsSlice.reducer;