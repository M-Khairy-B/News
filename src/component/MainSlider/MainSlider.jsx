import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../lib/articlesSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faBookmartSolid } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import share from "../../assets/images/share.svg";

export default function MainSlider() {
    const [isClicked, setIsClicked] = useState(false);
    const [iconStyle, setIconStyle] = useState("regular");
    const [isChange, setIsChange] = useState(false);
    const [iconStyleChange, setIconStyleChange] = useState("regular");
    const [source_id, setIdApi] = useState("cnn");
    const dispatch = useDispatch();
    const { articles, status, error } = useSelector((state) => state.articles);
    useEffect(() => {
        dispatch(fetchArticles({ source_id }));
    }, [dispatch, source_id]);

    // console.log(articles);
    const handleClick = () => {
        setIsClicked(!isClicked);
        setIconStyle(iconStyle === "regular" ? "solid" : "regular");
    };
    const handleChange = () => {
        setIsChange(!isChange);
        setIconStyleChange(iconStyleChange === "regular" ? "solid" : "regular");
    };
    let settings = {
        autoplay: true ,
        autoplaySpeed: 2000,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        nextArrow: false,
        prevArrow: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false,

                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,

                },
            },
        ],
    };
    return (
        <React.Fragment>
            <section>
            <div className="slider-arctical">
                <div className="container">
                    <Slider {...settings} className="main-slider">
                        {articles?.map((article, index) => (
                            <div className="slide-item" key={index}>
                                <div className="row align-items-center">
                                    <div className="col-12 col-lg-6">
                                        <div className="wrapper-img">
                                            <img
                                                className="w-100"
                                                src={article?.urlToImage}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="wrapper-text">
                                            <div className="trending d-flex justify-content-between align-items-center">
                                                <div className="main-trending ">
                                                    <span>Trending</span>
                                                </div>
                                                <div className="tool-icon d-flex align-items-end">
                                                    <Link onClick={handleClick}>
                                                        <FontAwesomeIcon
                                                            className={`all-icon ${
                                                                isClicked
                                                                    ? "clicked"
                                                                    : ""
                                                            }`}
                                                            icon={
                                                                iconStyle ===
                                                                "regular"
                                                                    ? faHeartRegular
                                                                    : faHeartSolid
                                                            }
                                                        />
                                                    </Link>
                                                    <Link to={article.url}>
                                                        <div className="all-icon">
                                                            <svg className="all-icon"
                                                                width="20"
                                                                height="20"
                                                                viewBox="0 0 13 16"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    clipRule="evenodd"
                                                                    d="M12 16H1C0.447 16 0 15.553 0 15.001V5C0 4.448 0.447 4 1 4H2.5V5H1.5C1.224 5 1 5.225 1 5.5V14.5C1 14.777 1.224 15.001 1.5 15.001H11.5C11.775 15.001 12 14.777 12 14.5V5.5C12 5.225 11.775 5 11.5 5H10.5V4H12C12.552 4 13 4.448 13 5V15.001C13 15.553 12.552 16 12 16ZM8.66602 3.35693L7 1.69092V11.5C7 11.776 6.775 12 6.5 12C6.224 12 6 11.776 6 11.5V1.69092L4.33301 3.35693C4.14301 3.54793 3.83294 3.54793 3.64294 3.35693C3.45294 3.16793 3.45294 2.85697 3.64294 2.66797L6.11304 0.196899C6.11604 0.192899 6.122 0.191012 6.125 0.187012C6.136 0.174012 6.13204 0.154968 6.14404 0.141968C6.16304 0.123968 6.18996 0.129967 6.20996 0.115967C6.28396 0.0559668 6.36995 0.0149346 6.47095 0.00793457C6.47895 0.00793457 6.48604 0.00292969 6.49304 0.00292969C6.49604 0.00292969 6.49798 0 6.50098 0C6.50398 0 6.50603 0.00192969 6.50903 0.00292969C6.51503 0.00192969 6.51902 0.00598145 6.52502 0.00598145C6.64402 0.0119814 6.75196 0.0589346 6.83496 0.132935C6.84196 0.139935 6.85301 0.136944 6.85901 0.142944C6.86501 0.150944 6.86202 0.161969 6.86902 0.167969C6.87302 0.171969 6.87198 0.179937 6.87598 0.184937L9.35803 2.66797C9.54903 2.85697 9.54903 3.16793 9.35803 3.35693C9.16603 3.54893 8.85702 3.54893 8.66602 3.35693Z"
                                                                    fill="#2A2A2A"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </Link>
                                                    <Link
                                                        onClick={handleChange}
                                                    >
                                                        <FontAwesomeIcon
                                                            className={`icon-link ${
                                                                isChange
                                                                    ? "main"
                                                                    : ""
                                                            }`}
                                                            icon={
                                                                iconStyleChange ===
                                                                "regular"
                                                                    ? faBookmarkRegular
                                                                    : faBookmartSolid
                                                            }
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h2>{article.title}</h2>
                                                <p>{article.description}</p>
                                            </div>
                                            <div className="text-content d-flex align-items-center">
                                                <span className="time-hour">
                                                    {article.publishedAt.slice(
                                                        0,
                                                        10
                                                    )}{" "}
                                                </span>
                                                <span className="by-name">
                                                    {article.author}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            </section>
 
        </React.Fragment>
    );
}
