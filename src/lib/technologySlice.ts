import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchTechnologyData = createAsyncThunk(
    "news/fetchTechnologyData",
    async ({ category, country }:any) => {
        const response = await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`, {
        });
        return response.data;
      }
);

const technologyDataSlice = createSlice({
    name: "subArticles",
    initialState: {
        technologyData: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTechnologyData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTechnologyData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.technologyData = action.payload.articles;
            })
            .addCase(fetchTechnologyData.rejected, (state, action) => {
                state.status = "failed";
            });
    },
});

export default technologyDataSlice.reducer;
