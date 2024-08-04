import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchBusinessData = createAsyncThunk(
    "news/fetchBusinessData",
    async ({ category, country }:any) => {
        const response = await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`, {
        });
        return response.data;
      }
);

const businessDataSlice = createSlice({
    name: "businessArticles",
    initialState: {
        businessData: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBusinessData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchBusinessData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.businessData = action.payload.articles;
            })
            .addCase(fetchBusinessData.rejected, (state, action) => {
                state.status = "failed";
            });
    },
});

export default businessDataSlice.reducer;
