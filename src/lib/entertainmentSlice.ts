import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchentErtainmentData = createAsyncThunk(
    "news/fetchEntertainmentData",
    async ({ category, country }:any) => {
        const response = await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`, {
        });
        return response.data;
      }
);

const entertainmentDataSlice = createSlice({
    name: "entertainmenTArticles",
    initialState: {
        entertainmentData: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchentErtainmentData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchentErtainmentData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.entertainmentData = action.payload.articles;
            })
            .addCase(fetchentErtainmentData.rejected, (state, action) => {
                state.status = "failed";
            });
    },
});

export default entertainmentDataSlice.reducer;
