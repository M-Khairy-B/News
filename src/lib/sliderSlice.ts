import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchSliderData = createAsyncThunk(
    "news/fetchSliderData",
    async ({ category, country }:any) => {
        const response = await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`, {
        });
        return response.data;
      }
);

const sliderDataSlice = createSlice({
    name: "subArticles",
    initialState: {
        sliderData: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSliderData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchSliderData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.sliderData = action.payload.articles;
            })
            .addCase(fetchSliderData.rejected, (state, action) => {
                state.status = "failed";
            });
    },
});

export default sliderDataSlice.reducer;
