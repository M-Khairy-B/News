import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchLiveArticles = createAsyncThunk(
    "news/fetchLiveArticles",
    async ({ source_id }: { source_id: string }) => {
        if (!source_id) {
            throw new Error("source_id is not defined");
        }

        const response = await axios.get(
            `https://saurav.tech/NewsAPI/everything/${source_id}.json`
        );
        return response.data;
    }
);

const liveArticlesSlice = createSlice({
    name: "subArticles",
    initialState: {
        liveArticles: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLiveArticles.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchLiveArticles.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.liveArticles = action.payload.articles;
            })
            .addCase(fetchLiveArticles.rejected, (state, action) => {
                state.status = "failed";
            });
    },
});

export default liveArticlesSlice.reducer;
