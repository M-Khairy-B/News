import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../lib/apiSlice';
import { fetchArticles } from '../../lib/articlesSlice';
import MainSlider from '../MainSlider/MainSlider';
import BreakingNews from '../BreakingNews/BreakingNews';
import NavsTabs from '../navsTabs/NavsTabs';
import SliderMain from '../SliderMain/SliderMain';
import { Helmet } from 'react-helmet';
import logo from "../../assets/images/logo.svg";

export default function Home() {

  return ( <React.Fragment>
        <Helmet>
        <title> NBC NEWS</title>
        <meta name="description" content="Helmet application" />
        <link rel="icon" type={logo} href="/" sizes="16x16" />

        
    </Helmet>
    <MainSlider/>
    <BreakingNews/>
    <NavsTabs/>
    <SliderMain/>
    </React.Fragment>
  )
}
