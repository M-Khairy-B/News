import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { fetchNews } from "../../lib/apiSlice";
import BasedLike from "../BasedLike/BasedLike";
BasedLike
export default function RecommendedArticle() {
    const [category, setCategory] = useState("science");
    const [country, setCountry] = useState("us");
    const dispatch = useDispatch();

    const { articles, status, error } = useSelector((state) => state.news);
    useEffect(() => {
        dispatch(fetchNews({ category, country }));
    }, [dispatch, category, country]);

    console.log(articles);
    let settings = {
        autoplay:true,
        autoplaySpeed:2000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      
    };
    return (
        <React.Fragment>
            <div className="col-12 col-lg-3 ">
                <div className="recommendedarticle">
                    <div className="recommended-head">
                        <h4 className="recommended-title">
                            Recommended for you
                        </h4>
                    </div>
                    <Slider {...settings} className="recommended-slider">
                        {articles?.map((articlemain , index) => (
                            <div className="recommended-slider-main" key={index}>
                                <div className="slider-recommended">
                                    <img className="recommended-img w-100" src={articlemain?.urlToImage} alt="" />
                                    <div className="img-title">
                                        <h5 className="title-img">
                                            {articlemain?.title}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                </div>
                <BasedLike/>

            </div>
        </React.Fragment>
    );
}
