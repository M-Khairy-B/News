import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchentScienceData = createAsyncThunk(
    "news/fetchSciencetData",
    async ({ category, country }:any) => {
        const response = await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`, {
        });
        return response.data;
      }
);

const scienceDataSlice = createSlice({
    name: "scienceTArticles",
    initialState: {
        scienceData: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchentScienceData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchentScienceData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.scienceData = action.payload.articles;
            })
            .addCase(fetchentScienceData.rejected, (state, action) => {
                state.status = "failed";
            });
    },
});

export default scienceDataSlice.reducer;