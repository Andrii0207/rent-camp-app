import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6618512b9a41b1b3dfbcc35a.mockapi.io';



export const getAdvertiseList = createAsyncThunk(
    "adverts/fetchAll", async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('/adverts', { params: { page: 1, limit: 3 } });
            return data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)