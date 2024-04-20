import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const favoritesSlice = createSlice({
    name: "favorites",
    initialState: { favoriteList: [] },
    reducers: {
        addToFavorite(state, { payload }) {
            state.favoriteList.push(payload)
        },
        deleteFromFavorite(state, { payload }) {
            state.favoriteList = state.favoriteList.filter(item => item._id !== payload._id)
        }

    },
    extraReducers: builder => {
        // builder
        //     .addCase(getAdvertiseList.pending, (state, _) => {
        //         state.isLoading = true;
        //     })
        //     .addCase(getAdvertiseList.fulfilled, (state, { payload }) => {
        //         state.isLoading = false;
        //         state.entity = payload;
        //         state.error = null;
        //     }).addCase(getAdvertiseList.rejected, (state, { payload }) => {
        //         state.isLoading = false;
        //         state.error = payload;
        //     })
    }
})

const persistConfig = {
    key: 'favoriteList',
    storage,
}

export const { addToFavorite, deleteFromFavorite } = favoritesSlice.actions;
export const persistedReducer = persistReducer(persistConfig, favoritesSlice.reducer)
