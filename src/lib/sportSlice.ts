import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchSportData = createAsyncThunk(
    "news/fetchSportData",
    async ({ category, country }:any) => {
        const response = await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`, {
        });
        return response.data;
      }
);

const sportDataSlice = createSlice({
    name: "sportArticles",
    initialState: {
        sportData: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSportData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchSportData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.sportData = action.payload.articles;
            })
            .addCase(fetchSportData.rejected, (state, action) => {
                state.status = "failed";
            });
    },
});

export default sportDataSlice.reducer;
