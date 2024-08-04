import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchArticles = createAsyncThunk(
  'news/fetchArticles',
  async ({ source_id }: { source_id: string }) => {
    if (!source_id) {
      throw new Error('source_id is not defined');
    }

    const response = await axios.get(`https://saurav.tech/NewsAPI/everything/${source_id}.json`);
    return response.data;
  }
);


const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload.articles;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
      });
  }
});

export default articlesSlice.reducer;
