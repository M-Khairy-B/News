import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../../lib/articlesSlice';
import SectionFourDetails from '../SectionFourDetails/SectionFourDetails';

export default function SectionThreeDetails() {
    const [source_id, setIdApi] = useState("cnn");
    const dispatch = useDispatch();
    const [randomArticle, setRandomArticle] = useState(null);

    const { articles, status, error } = useSelector((state) => state.articles);
    useEffect(() => {
        dispatch(fetchArticles({ source_id }));
    }, [dispatch, source_id]);

    // console.log(articles);
    useEffect(() => {
        if (articles.length > 0) {
            const getRandomArticle = () => {
                const randomIndex = Math.floor(Math.random() * articles.length);
                return articles[randomIndex];
            };
            setRandomArticle(getRandomArticle());
        }
    }, [articles]);

  return ( <React.Fragment>

    <div className='another-article'>
            <div className='row justify-content-center'>
                <div className='col-12 col-lg-10'>
                    <div className='article-wrapper'>
                            <img className='main-img' src={randomArticle?.urlToImage} alt="" />
                            <p className='main-description'>{randomArticle?.description} <span className='name-main'>{randomArticle?.source.name}</span> </p>
                    </div>
                </div>
                <div className='all-paragraph'>
                    <p className='paragraph-main mb-3'>{randomArticle?.content}</p>
                    <p className='paragraph-main mb-3'>{randomArticle?.description}</p>
                    <p className='paragraph-main mb-3'>{randomArticle?.content}</p>
                    <p className='paragraph-main'>{randomArticle?.description}</p>
                </div>
            </div>
    </div>
    <SectionFourDetails/>

    </React.Fragment>

  )
}
