import React, { useEffect, useState } from "react";
import { fetchSubArticles } from "../../lib/subArticlesSlice";
import { useDispatch, useSelector } from "react-redux";
import Testmonial from "../Testmonial/Testmonial";
export default function SectionFourDetails() {
    const [source_id, setSource_id] = useState("bbc-news");
    const dispatch = useDispatch();
    const { subArticles, status, error } = useSelector(
        (state) => state.subArticles
    );
    const [randomArticle, setRandomArticle] = useState(null);


    useEffect(() => {
        dispatch(fetchSubArticles({ source_id }));
    }, [dispatch, source_id]);

    // console.log(subArticles);
    useEffect(() => {
        if (subArticles.length > 0) {
            const getRandomArticle = () => {
                const randomIndex = Math.floor(Math.random() * subArticles.length);
                return subArticles[randomIndex];
            };
            setRandomArticle(getRandomArticle());
        }
    }, [subArticles]);

    

    return (
        <React.Fragment>
            <div className="another-article">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                        <div className="article-wrapper">
                            <img
                                className="main-img"
                                src={randomArticle?.urlToImage}
                                alt=""
                            />
                            <p className="main-description">
                                {randomArticle?.description}{" "}
                                <span className="name-main">
                                    {randomArticle?.source.name}
                                </span>{" "}
                            </p>
                        </div>
                    </div>
                    <div className="all-paragraph">
                        <p className="paragraph-main mb-3">
                            {randomArticle?.content}
                        </p>
                        <p className="paragraph-main mb-3">
                            {randomArticle?.description}
                        </p>
                        <p className="paragraph-main mb-3">
                            {randomArticle?.content}
                        </p>
                        <p className="paragraph-main">
                            {randomArticle?.description}
                        </p>
                    </div>
                </div>
            </div>
            <Testmonial/>
        </React.Fragment>
    );
}
