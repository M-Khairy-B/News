import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async ({ category, country }:any) => {
    const response = await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`, {
    });
    return response.data;
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload.articles;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
      });
  }
});

export default newsSlice.reducer;
