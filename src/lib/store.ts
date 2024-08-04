import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './../lib/apiSlice';
import articlesReducer from './../lib/articlesSlice';
import subArticlesReducer from './../lib/subArticlesSlice';
import liveArticlesReducer from './../lib/liveArticlesSlice';
import sliderDataReducer from './../lib/sliderSlice';
import technologyDataReducer from './../lib/technologySlice';
import businessDataReducer from './../lib/businessSlice';
import sportDataReducer from './../lib/sportSlice';
import entertainmentDataReducer from './../lib/entertainmentSlice';
import generalDataReducer from './../lib/generalSlice';
import  scienceDataReducer from './../lib/scienceSlice';

const store = configureStore({
  reducer: {
      news: newsReducer,
      articles: articlesReducer,
      subArticles: subArticlesReducer,
      liveArticles: liveArticlesReducer,
      sliderData: sliderDataReducer,
      technologyData: technologyDataReducer,
      businessData:businessDataReducer,
      sportData:sportDataReducer,
      entertainmentData:entertainmentDataReducer,
      generalData:generalDataReducer,
      scienceData:scienceDataReducer

  }
});


export default store;  
