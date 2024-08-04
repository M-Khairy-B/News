import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { fetchNews } from "../../lib/apiSlice";

export default function BasedLike() {
    const [category, setCategory] = useState("science");
    const [country, setCountry] = useState("in");
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
                <div className="basedlike-article">
                    <div className="basedlike-head">
                        <h4 className="basedlike-title">
                        Based on Like
                        </h4>
                    </div>
                    <Slider {...settings} className="basedlike-slider">
                        {articles?.slice(10 , 24).map((articlemain , index) => (
                            <div className="basedlike-slider-main" key={index}>
                                <div className="slider-basedlike">
                                    <img className="basedlike-img w-100" src={articlemain?.urlToImage} alt="" />
                                    <div className="basedlike-title">
                                        <h5 className="title-basedlike">
                                            {articlemain?.title}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
        </React.Fragment>
    );
}
