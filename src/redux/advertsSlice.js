import { createSlice } from "@reduxjs/toolkit";
import { getAdvertiseList, getAll } from "./operations";

const advertsSlice = createSlice({
    name: "adverts",
    initialState: { entity: [], isLoading: false, error: null, all: [] },
    // reducers: {
    //     addToFavorite(state, { payload }) {
    //         state.favorites.push(payload)

    //     },
    //     deleteFromFavorite(state, { payload }) {
    //         state.favorites = state.favorites.filter(item => item !== payload)
    //     }

    // },
    extraReducers: builder => {
        builder
            .addCase(getAdvertiseList.pending, (state, _) => {
                state.isLoading = true;
            })
            .addCase(getAdvertiseList.fulfilled, (state, { payload }) => {
                console.log(payload)
                state.isLoading = false;
                state.entity = [...state.entity, ...payload];
                state.error = null;
            }).addCase(getAdvertiseList.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            }).addCase(getAll.pending, (state, _) => {
                state.isLoading = true;
            })
            .addCase(getAll.fulfilled, (state, { payload }) => {
                console.log(payload)
                state.isLoading = false;
                state.all = payload;
                state.error = null;
            }).addCase(getAll.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
    }
})

// export const { addToFavorite, deleteFromFavorite } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;