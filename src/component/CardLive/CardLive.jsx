import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import live from "../../assets/images/Live.svg";
import { fetchLiveArticles } from "../../lib/liveArticlesSlice";
export default function CardLive() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
         responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false,
                arrows: false,

              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                dots: false,
                arrows: false,

              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false,

              }
            }
          ]
    };
    const [source_id, setSource_id] = useState("fox-news");
    const dispatch = useDispatch();
    const { liveArticles, status, error } = useSelector(
        (state) => state.liveArticles
    );

    useEffect(() => {
        dispatch(fetchLiveArticles({ source_id }));
    }, [dispatch, source_id]);

    // console.log(liveArticles);

    return (
        <React.Fragment>
            <div className="col-12 col-lg-4">
                <div className="all-live">
                    <div className="main-live d-flex align-items-center">
                        <h3>Live</h3>
                        <img src={live} alt="" />
                    </div>
                    <Slider {...settings} className="live">
                        {liveArticles?.map((liveArticle , index) => (
                            <div className="wrapper-live" key={index}>
                                <div className="card-live">
                                    <img
                                        className="w-100"
                                        src={liveArticle?.urlToImage}
                                        alt=""
                                    />
                                    <h4 className="title-live">
                                        {liveArticle?.title}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="location-news">
                    <div className="title-location">
                        <h2>Location News</h2>
                    </div>
                    <div className="specific-news">
                        <h3>Get Location specific News</h3>
                        <form>
                            <div className="all-loction">
                                <input
                                    className="input-loction"
                                    type="text"
                                    placeholder="Enter Your Location"
                                />
                            </div>
                            <div className="btn-main-loction">
                                <button type="submit" className="btn-loction">SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
