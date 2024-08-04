import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchentGeneralData = createAsyncThunk(
    "news/fetchGeneralData",
    async ({ category, country }:any) => {
        const response = await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`, {
        });
        return response.data;
      }
);

const generalDataSlice = createSlice({
    name: "generalArticles",
    initialState: {
        generalData: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchentGeneralData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchentGeneralData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.generalData = action.payload.articles;
            })
            .addCase(fetchentGeneralData.rejected, (state, action) => {
                state.status = "failed";
            });
    },
});

export default generalDataSlice.reducer;
