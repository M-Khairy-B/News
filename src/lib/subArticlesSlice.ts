import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchSubArticles = createAsyncThunk(
    "news/fetchSubArticles",
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

const subArticlesSlice = createSlice({
    name: "subArticles",
    initialState: {
        subArticles: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSubArticles.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchSubArticles.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.subArticles = action.payload.articles;
            })
            .addCase(fetchSubArticles.rejected, (state, action) => {
                state.status = "failed";
            });
    },
});

export default subArticlesSlice.reducer;
