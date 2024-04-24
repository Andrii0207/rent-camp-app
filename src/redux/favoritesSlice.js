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
})

const persistConfig = {
    key: 'favoriteList',
    storage,
}

export const { addToFavorite, deleteFromFavorite } = favoritesSlice.actions;
export const persistedReducer = persistReducer(persistConfig, favoritesSlice.reducer)
